import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  RenderCellOptions,
} from "react-native-confirmation-code-field";

import {
  Container,
  Title,
  PinText,
  ErrorMessage,
  Message,
  Row,
  Icon,
} from "./styles";
import { useAuth } from "../../hooks/auth";

const Auth = () => {
  const { pin, savePin, setIsLogged } = useAuth();
  const [hasPin, setHasPin] = useState(false);
  const [value, setValue] = useState("");
  const [confirmValue, setConfirmValue] = useState("");
  const [validating, setValidating] = useState(false);
  const [error, setError] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: 4 });

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

  const tryNewPIN = () => {
    setValue("");
    setConfirmValue("");
    setValidating(false);
    setError(false);
  };

  const verifyPin = () => {
    if (value === pin) {
      setIsLogged(true);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    verifyIfHasPin();
  }, []);

  useEffect(() => {
    if (value.length === 4) {
      if (hasPin) {
        verifyPin();
      } else {
        setValidating(true);
      }
    }
  }, [value]);

  useEffect(() => {
    if (confirmValue.length === 4) {
      if (value === confirmValue) {
        setError(false);
        savePin(value);
        setIsLogged(true);
      } else {
        setError(true);
        setConfirmValue("");
      }
    }
  }, [confirmValue]);

  return (
    <Container>
      {hasPin ? (
        <Title>{"Enter your PIN"}</Title>
      ) : (
        <Title>{validating ? "Confirm your PIN" : "Register your PIN"}</Title>
      )}
      {!validating ? (
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
      ) : (
        <>
          <CodeField
            ref={ref}
            {...props}
            value={confirmValue}
            onChangeText={setConfirmValue}
            cellCount={4}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
        </>
      )}

      {error && <ErrorMessage>The PIN doesn't match</ErrorMessage>}

      {validating && (
        <Row onPress={tryNewPIN}>
          <Icon name="arrow-left" />
          <Message>Enter new PIN</Message>
        </Row>
      )}
    </Container>
  );
};

export default Auth;
