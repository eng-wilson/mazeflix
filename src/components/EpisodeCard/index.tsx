import React from "react";

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
  length: number;
  rating: number | undefined;
  image: string | undefined;
  onPress: () => void;
}

const EpisodeCard = ({ title, length, rating, image, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Image source={{ uri: image }} />

      <Wrapper>
        <Title>{title}</Title>

        <DarkText>{length}m</DarkText>
      </Wrapper>

      {rating && (
        <Row>
          <Icon name="star" />

          <DarkText>{rating.toFixed(1)}</DarkText>
        </Row>
      )}
    </Container>
  );
};

export default EpisodeCard;
