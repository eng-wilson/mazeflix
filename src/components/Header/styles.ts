import styled from "styled-components/native";
import { FontAwesome, Feather } from "@expo/vector-icons";

interface FavoriteProps {
  favorite?: boolean;
}

export const Container = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.gray900};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px 20px;
`;

export const IconContainer = styled.TouchableOpacity``;

export const FavoriteContainer = styled.TouchableOpacity<FavoriteProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, favorite }) =>
    favorite ? theme.colors.yellow300 : theme.colors.gray700};

  padding: 6px 10px;

  border-radius: 5px;
`;

export const FavoriteText = styled.Text<FavoriteProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, favorite }) =>
    favorite ? theme.colors.black : theme.colors.gray400};

  padding-left: 8px;
`;

export const Icon = styled(Feather)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.white};
`;

export const HeartIcon = styled(FontAwesome)<FavoriteProps>`
  font-size: 16px;
  color: ${({ theme, favorite }) =>
    favorite ? theme.colors.black : theme.colors.gray400};
`;
