import React from "react";
import { View } from "react-native";

import {
  Container,
  CoverImage,
  Title,
  SubTitle,
  Genres,
  DarkText,
  InfoContainer,
  Wrapper,
} from "./styles";

const ShowDetails = () => {
  return (
    <Container>
      <CoverImage
        source={{
          uri: "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
        }}
      />

      <InfoContainer>
        <Wrapper>
          <Title>Person of Interest</Title>

          <Genres>Action, Crime, Science-Fiction</Genres>
        </Wrapper>

        <Wrapper>
          <SubTitle>Summary</SubTitle>

          <DarkText>
            You are being watched. The government has a secret system, a machine
            that spies on you every hour of every day. I know because I built
            it. I designed the Machine to detect acts of terror but it sees
            everything. Violent crimes involving ordinary people.
          </DarkText>
        </Wrapper>

        <Wrapper>
          <SubTitle>Episodes</SubTitle>
        </Wrapper>
      </InfoContainer>
    </Container>
  );
};

export default ShowDetails;
