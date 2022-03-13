import React from "react";
import { View } from "react-native";
import {
  Container,
  DarkText,
  Image,
  Title,
  Wrapper,
  StatusWrapper,
  Status,
  FlexStartContainer,
  Icon,
  Row,
} from "./styles";

interface Props {
  title: string;
  status: string;
  genres: string[];
  rating: number | undefined;
  image: string;
}

const ShowCard = ({ title, status, genres, rating, image }: Props) => {
  return (
    <Container>
      <Image source={{ uri: image }} />
      <Wrapper>
        <Title>{title}</Title>
        <FlexStartContainer>
          <StatusWrapper>
            <Status>{status}</Status>
          </StatusWrapper>
        </FlexStartContainer>

        <DarkText>{genres.join(", ")}</DarkText>
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

export default ShowCard;
