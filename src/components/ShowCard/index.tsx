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

const ShowCard = () => {
  return (
    <Container>
      <Image />
      <Wrapper>
        <Title>Title</Title>

        <FlexStartContainer>
          <StatusWrapper>
            <Status>Ended</Status>
          </StatusWrapper>
        </FlexStartContainer>

        <DarkText>Drama, Romance</DarkText>
      </Wrapper>

      <Row>
        <Icon name="star" />

        <DarkText>6.6</DarkText>
      </Row>
    </Container>
  );
};

export default ShowCard;
