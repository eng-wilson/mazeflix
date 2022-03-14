import React from "react";
import { ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import Header from "../../components/Header";

import { StackParamProps } from "../../interfaces/routes.b";

import {
  Container,
  CoverImage,
  Title,
  SubTitle,
  DarkText,
  InfoContainer,
  Wrapper,
  Row,
  Icon,
} from "./styles";

const EpisodeDetails = () => {
  const { params } = useRoute<RouteProp<StackParamProps, "EpisodeDetails">>();

  return (
    <Container>
      <Header />

      <ScrollView>
        <CoverImage
          source={{
            uri: params?.image.original,
          }}
        />

        <InfoContainer>
          <Wrapper>
            <Row>
              <Title>{params?.name}</Title>

              {params?.rating.average && (
                <Row>
                  <Icon name="star" />

                  <DarkText>{params?.rating.average?.toFixed(1)}</DarkText>
                </Row>
              )}
            </Row>

            <DarkText bold>{params?.runtime}m</DarkText>
          </Wrapper>

          <Wrapper>
            <Title>Season {params?.season}</Title>

            <DarkText bold>Episode {params?.number}</DarkText>
          </Wrapper>

          <Wrapper>
            <SubTitle>Summary</SubTitle>

            <DarkText>{params?.summary.replace(/<[^>]*>?/gm, "")}</DarkText>
          </Wrapper>
        </InfoContainer>
      </ScrollView>
    </Container>
  );
};

export default EpisodeDetails;
