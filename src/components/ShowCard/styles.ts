import styled, { css } from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

interface IconProps {
  inverse?: boolean;
}

export const Container = styled.TouchableOpacity`
  flex: 1;
  border-radius: 10px;

  /* justify-content: center; */
  align-items: center;

  margin-top: 20px;
  /* padding: 10px 14px; */
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.gray900};
`;

export const Wrapper = styled.View`
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  text-align: center;

  color: ${({ theme }) => theme.colors.white};

  padding-top: 8px;
  padding-bottom: 4px;
`;

export const DarkText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray400};

  padding-left: 6px;
`;

export const Row = styled.View`
  flex-direction: row;

  align-items: center;

  padding-top: 4px;
`;

export const Icon = styled(FontAwesome)<IconProps>`
  font-size: 16px;
  color: ${({ theme, inverse }) =>
    inverse ? theme.colors.black : theme.colors.yellow300};

  /* margin-right: 6px; */
`;

export const IconContainer = styled.View`
  width: 30px;
  height: 30px;

  border-radius: 20px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.yellow300};

  position: absolute;

  top: -13px;
  left: -13px;
`;
