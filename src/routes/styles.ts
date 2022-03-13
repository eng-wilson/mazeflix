import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  focused: boolean;
}

export const Icon = styled(Feather)<Props>`
  font-size: ${RFValue(24)}px;
  color: ${({ theme, focused }) =>
    focused ? theme.colors.yellow300 : theme.colors.gray400};
`;
