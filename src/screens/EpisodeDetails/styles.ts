import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";

interface TextProps {
  bold?: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray900};

  padding-top: 20px;
`;

export const CoverImage = styled.Image`
  width: 100%;

  height: 300px;
`;

export const InfoContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.gray900};

  padding: 0px 20px;
`;

export const Wrapper = styled.View`
  width: 100%;

  margin-top: 20px;
`;

export const Title = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;

  color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 6px;
`;

export const DarkText = styled.Text<TextProps>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.fonts.bold : theme.fonts.regular};
  font-size: 16px;

  text-align: justify;

  color: ${({ theme }) => theme.colors.gray400};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled(FontAwesome)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.yellow300};

  margin-right: 6px;
`;
