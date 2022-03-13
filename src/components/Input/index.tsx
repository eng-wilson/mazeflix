import React, { useState, useCallback } from "react";
import { useTheme } from "styled-components";

import { Container, InputItem, Icon } from "./styles";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
}

interface InputRef {
  focus(): void;
}

interface InputValueReference {
  value: string;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({
  placeholder,
  onChange,
  value,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <>
      <Container isFocused={isFocused || value !== ""}>
        <Icon name="search" />
        <InputItem
          {...rest}
          placeholder={placeholder}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={(e) => onChange(e.nativeEvent.text)}
          value={value}
          placeholderTextColor={theme.colors.gray400}
        />
      </Container>
    </>
  );
};

export default Input;
