import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  border-radius: 10px;

  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.gray700};

  margin-bottom: 20px;
  padding: 10px 14px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.gray900};
`;

export const Wrapper = styled.View`
  padding-left: 14px;

  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.white};
`;

export const DarkText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.gray400};
`;

export const FlexStartContainer = styled.View`
  width: 100%;
  align-items: flex-start;
`;

export const StatusWrapper = styled.View`
  border-radius: 5px;

  padding: 2px 6px;

  background-color: ${({ theme }) => theme.colors.red400};
`;

export const Status = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 12px;

  color: ${({ theme }) => theme.colors.black};
`;

export const Row = styled.View`
  flex: 1;

  flex-direction: row;

  align-items: center;
  align-self: flex-start;
  justify-content: flex-end;
`;

export const Icon = styled(FontAwesome)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.yellow300};

  margin-right: 6px;
`;
