import { useNavigation } from "@react-navigation/native";
import React from "react";
import { EpisodeProps } from "../../interfaces/shows.b";

import {
  Container,
  Icon,
  IconContainer,
  HeartIcon,
  FavoriteContainer,
  FavoriteText,
} from "./styles";

interface HeaderProps {
  favorite?: boolean;
  onFav?: () => void;
}

const Header = ({ favorite, onFav }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Container>
      <IconContainer testID="headerButton" onPress={navigation.goBack}>
        <Icon name="arrow-left" />
      </IconContainer>

      {onFav && (
        <FavoriteContainer onPress={onFav} favorite={favorite}>
          <HeartIcon name={"heart"} favorite={favorite} />

          <FavoriteText favorite={favorite}>Favorite</FavoriteText>
        </FavoriteContainer>
      )}
    </Container>
  );
};

export default Header;
