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
} from "./styles";

interface Props {
  title: string;
  genres: string[];
  rating: number | undefined;
  image: string;
  onPress: () => void;
}

const ShowCard = ({ title, genres, rating, image, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Image source={{ uri: image }} />

      <Title>{title}</Title>

      {genres.length > 0 && <DarkText>{genres.join(", ")}</DarkText>}

      {rating && (
        <Row>
          <Icon name="star" />

          <DarkText>{rating.toFixed(1)}</DarkText>
        </Row>
      )}
    </Container>
  );
};

export default ShowCard;
