import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${RFValue(46)}px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px #6a6c73;
  border-radius: 10px;

  background-color: #fff;

  margin-bottom: ${RFValue(16)}px;
  padding: 0px 16px;

  ${(props) =>
    props.isFocused &&
    css`
      border: 1px ${({ theme }) => theme.colors.yellow300};
    `};
`;

export const InputItem = styled.TextInput`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  flex: 1;
  height: ${RFValue(50)}px;
`;

export const LabelContainer = styled.View`
  margin: auto;
  margin-left: ${RFValue(14)}px;
  top: -${RFValue(11)}px;
  position: absolute;

  background-color: #f9f9f9;
  z-index: 1;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  padding: 0px ${RFValue(5)}px;
  color: #ff8519;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: ${RFValue(8)}px;
`;
