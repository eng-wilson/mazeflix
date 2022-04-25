import React from "react";
import { View } from "react-native";
import {
  Container,
  DarkText,
  Image,
  Title,
  Wrapper,
  Icon,
  Row,
  IconContainer,
} from "./styles";

interface Props {
  title: string;
  genres: string[];
  rating: {
    average: number | undefined;
  };
  image: string | undefined;
  favorite: boolean;
  onPress: () => void;
}

const ShowCard = ({
  title,
  genres,
  rating,
  image,
  onPress,
  favorite,
}: Props) => {
  return (
    <Container onPress={onPress}>
      <View>
        <Image source={{ uri: image }} />

        {favorite && (
          <IconContainer testID="iconContainer">
            <Icon testID="icon" name="heart" inverse={favorite} />
          </IconContainer>
        )}
      </View>

      <Title>{title}</Title>

      {genres.length > 0 && <DarkText>{genres.join(", ")}</DarkText>}

      {rating.average && (
        <Row>
          <Icon name="star" />

          <DarkText>{rating.average?.toFixed(1)}</DarkText>
        </Row>
      )}
    </Container>
  );
};

export default ShowCard;
