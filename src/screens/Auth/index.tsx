import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Switch } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  RenderCellOptions,
} from "react-native-confirmation-code-field";
import * as LocalAuthentication from "expo-local-authentication";

import {
  Container,
  Title,
  PinText,
  ErrorMessage,
  Message,
  AbsoluteRow,
  Icon,
  Logo,
  OptionText,
  SimpleRow,
} from "./styles";
import { useAuth } from "../../hooks/auth";
import { useTheme } from "styled-components";

const Auth = () => {
  const { pin, savePin, setIsLogged } = useAuth();
  const theme = useTheme();

  const [hasPin, setHasPin] = useState(false);
  const [value, setValue] = useState("");
  const [confirmValue, setConfirmValue] = useState("");
  const [validating, setValidating] = useState(false);
  const [error, setError] = useState(false);
  const [allowFingerprint, setAllowFingerprint] = useState(false);
  const [askFingerprint, setAskFingerprint] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const ref = useBlurOnFulfill({ value, cellCount: 4 });

  const [isFingerprintAvailable, setIsFingerprintAvailable] = useState(false);

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const verifyIfHasPin = async () => {
    try {
      const response = await AsyncStorage.getItem("@auth_key");

      if (response !== null) {
        setHasPin(true);
      } else {
        setHasPin(false);
      }
    } catch (e) {
      console.log(e);
      setHasPin(false);
    }
  };

  const verifyAllowFingerprint = async () => {
    try {
      const allow = await LocalAuthentication.hasHardwareAsync();

      if (allow) {
        setIsFingerprintAvailable(true);
        const response = await AsyncStorage.getItem("@fingerprint");

        if (response !== null) {
          setAllowFingerprint(true);
          setAskFingerprint(true);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const renderCell = ({ index, symbol, isFocused }: RenderCellOptions) => {
    let textChild = null;

    if (symbol) {
      textChild = "•";
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <PinText key={index} onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </PinText>
    );
  };

  const toggleAllowFingerprint = () => {
    if (!allowFingerprint) {
      handleFingerprint();
    }
    setAllowFingerprint((value) => !value);
  };

  const tryNewPIN = () => {
    setValue("");
    setConfirmValue("");
    setValidating(false);
    setError(false);
  };

  const verifyPin = async () => {
    if (value === pin) {
      await AsyncStorage.setItem("@fingerprint", String(allowFingerprint));
      setIsLogged(true);
    } else {
      setError(true);
      setErrorMessage("PIN doesn't match.");
    }
  };

  const handleFingerprint = async () => {
    try {
      const response = await LocalAuthentication.authenticateAsync();

      if (response.success) {
        await AsyncStorage.setItem("@fingerprint", String(allowFingerprint));
        setIsLogged(true);
      } else {
        setError(true);
        setErrorMessage("We couldn't validate your credentials. Try again.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    verifyIfHasPin();
    verifyAllowFingerprint();
  }, []);

  useEffect(() => {
    if (askFingerprint) {
      handleFingerprint();
    }
  }, [askFingerprint]);

  useEffect(() => {
    if (value.length === 4) {
      if (confirmValue.length === 4) {
        if (value === confirmValue) {
          setError(false);
          savePin(value);
          setIsLogged(true);
        } else {
          setError(true);
          setErrorMessage("PIN doesn't match.");
          setConfirmValue("");
        }
      }
      if (hasPin) {
        verifyPin();
      } else {
        setConfirmValue(value);
        setValue("");
        setValidating(true);
      }
    }
  }, [value]);

  return (
    <Container>
      <Logo>Mazeflix</Logo>

      {hasPin ? (
        <Title>{"Enter your PIN"}</Title>
      ) : (
        <Title>{validating ? "Confirm your PIN" : "Register your PIN"}</Title>
      )}

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={4}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />

      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <SimpleRow>
        <OptionText>Enable fingerprint</OptionText>
        <Switch
          trackColor={{
            false: theme.colors.gray400,
            true: theme.colors.white,
          }}
          thumbColor={
            allowFingerprint ? theme.colors.yellow300 : theme.colors.white
          }
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleAllowFingerprint}
          value={allowFingerprint}
        />
      </SimpleRow>
      {validating && (
        <AbsoluteRow onPress={tryNewPIN}>
          <Icon name="arrow-left" />
          <Message>Enter new PIN</Message>
        </AbsoluteRow>
      )}
    </Container>
  );
};

export default Auth;
