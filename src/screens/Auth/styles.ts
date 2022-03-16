import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray900};

  align-items: center;
  justify-content: center;

  padding-top: 20px;
`;

export const Logo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: 40px;
  color: ${({ theme }) => theme.colors.yellow300};

  text-align: center;

  position: absolute;
  top: 10%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;

  text-align: center;

  color: ${({ theme }) => theme.colors.white};
`;

export const PinText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 24px;

  width: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.white};

  margin: 24px 16px;
`;

export const ErrorMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;

  text-align: center;

  color: ${({ theme }) => theme.colors.red400};
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;

  text-align: left;

  align-self: flex-start;

  color: ${({ theme }) => theme.colors.white};
`;

export const SimpleRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AbsoluteRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 10%;
  left: 5%;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};

  font-size: 18px;
  margin-right: 8px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const OptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
