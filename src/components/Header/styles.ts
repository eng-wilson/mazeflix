import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  /* position: absolute; */
  top: 0;
  z-index: 1;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.gray900};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;
`;

export const IconContainer = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.white};
`;
