import React, { useEffect, useState } from "react";
import { ScrollView, RefreshControl } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import Header from "../../components/Header";
import ShowCard from "../../components/ShowCard";

import { useFav } from "../../hooks/favorites";

import { StackParamProps } from "../../interfaces/routes.b";
import { ShowProps } from "../../interfaces/shows.b";

import { getPeopleCast } from "../../services/people";

import {
  Container,
  CoverImage,
  Title,
  SubTitle,
  DarkText,
  InfoContainer,
  Wrapper,
  EpisodeList,
  ShowCardContainer,
} from "./styles";

interface CastResponseProps {
  _embedded: {
    show: ShowProps;
  };
}

const PeopleDetails = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamProps>>();
  const { params } = useRoute<RouteProp<StackParamProps, "PeopleDetails">>();
  const { favorites } = useFav();
  const [shows, setShows] = useState<ShowProps[]>([]);
  const [loading, setLoading] = useState(true);

  const getPeopleCastData = async () => {
    try {
      setLoading(true);
      const response = await getPeopleCast(params.id);

      if (response.status === 200) {
        setShows(
          response.data.map(
            (result: CastResponseProps) => result._embedded.show
          )
        );
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("error");
    }
  };

  useEffect(() => {
    getPeopleCastData();
  }, []);

  return (
    <Container>
      <Header />

      <ScrollView refreshControl={<RefreshControl refreshing={loading} />}>
        <CoverImage
          source={{
            uri: params?.image?.original,
          }}
          resizeMode="contain"
        />

        <InfoContainer>
          <Wrapper>
            <Title>{params?.name}</Title>
          </Wrapper>

          <Wrapper>
            <SubTitle>Cast</SubTitle>
            {!loading && shows.length === 0 && <DarkText>-</DarkText>}

            <EpisodeList>
              {shows.map((item: ShowProps) => (
                <ShowCardContainer key={item.id}>
                  <ShowCard
                    title={item.name}
                    genres={item.genres}
                    rating={item.rating}
                    image={item.image?.medium}
                    favorite={
                      !!favorites.find((favorite) => favorite.id === item.id)
                    }
                    onPress={() =>
                      navigation.navigate("ShowDetails", { id: item.id })
                    }
                  />
                </ShowCardContainer>
              ))}
            </EpisodeList>
          </Wrapper>
        </InfoContainer>
      </ScrollView>
    </Container>
  );
};

export default PeopleDetails;
