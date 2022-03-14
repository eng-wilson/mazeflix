import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  flex-direction: row;

  width: 100%;
  border-radius: 10px;

  margin-bottom: 20px;
  /* padding: 10px 14px; */
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.gray900};
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;

  margin-left: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.white};
`;

export const DarkText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray400};
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;

  align-self: flex-start;
  align-items: center;
  justify-content: flex-end;

  /* padding-top: 4px; */
`;

export const Icon = styled(FontAwesome)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.yellow300};

  margin-right: 6px;
`;
