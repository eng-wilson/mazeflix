import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
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
  Row,
  Icon,
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

  const getPeopleCastData = async () => {
    try {
      const response = await getPeopleCast(params.id);

      if (response.status === 200) {
        setShows(
          response.data.map(
            (result: CastResponseProps) => result._embedded.show
          )
        );
      }
    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    getPeopleCastData();
  }, []);

  return (
    <Container>
      <Header />

      {console.tron.logImportant(params)}

      <ScrollView>
        <CoverImage
          source={{
            uri: params?.image?.original,
          }}
        />

        <InfoContainer>
          <Wrapper>
            <Title>{params?.name}</Title>

            <DarkText>{params?.country?.name}</DarkText>
          </Wrapper>

          {shows.length > 0 && (
            <Wrapper>
              <SubTitle>Cast</SubTitle>

              <EpisodeList>
                {console.tron.logImportant(shows)}
                {shows.map((item: ShowProps) => (
                  <ShowCardContainer>
                    <ShowCard
                      key={item.id}
                      title={item.name}
                      genres={item.genres}
                      rating={item.rating}
                      image={item.image?.medium}
                      favorite={favorites.includes(item.id)}
                      onPress={() =>
                        navigation.navigate("ShowDetails", { id: item.id })
                      }
                    />
                  </ShowCardContainer>
                ))}
              </EpisodeList>
            </Wrapper>
          )}
        </InfoContainer>
      </ScrollView>
    </Container>
  );
};

export default PeopleDetails;
