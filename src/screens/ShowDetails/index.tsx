import React, { useEffect, useState } from "react";
import { ScrollView, RefreshControl } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";

import EpisodeCard from "../../components/EpisodeCard";
import Header from "../../components/Header";

import { StackParamProps } from "../../interfaces/routes.b";
import { ShowProps, EpisodeProps } from "../../interfaces/shows.b";

import {
  getShowById,
  getShowSeasons,
  getShowEpisodes,
} from "../../services/shows";

import {
  Container,
  CoverImage,
  Title,
  SubTitle,
  Genres,
  DarkText,
  InfoContainer,
  Wrapper,
  EpisodeList,
  StyledPicker,
  Row,
  Icon,
} from "./styles";
import { useTheme } from "styled-components";
import { StackNavigationProp } from "@react-navigation/stack";
import { useFav } from "../../hooks/favorites";

const ShowDetails = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamProps>>();
  const { favorites, toggleFavorite } = useFav();
  const [isFavorite, setIsFavorite] = useState(false);
  const theme = useTheme();
  const [season, setSeason] = useState(1);
  const [seasons, setSeasons] = useState<number[]>();
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [episodesBySeason, setEpisodesBySeason] = useState([]);
  const [show, setShow] = useState<ShowProps>();
  const { params } = useRoute<RouteProp<StackParamProps, "ShowDetails">>();

  const getShowDetails = async () => {
    try {
      setLoading(true);
      const response = await getShowById(params.id);

      if (response.status === 200) {
        setShow(response.data);
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("error");
    }
  };

  const getShowSeasonsData = async () => {
    try {
      setLoading(true);
      const response = await getShowSeasons(params.id);

      if (response.status === 200) {
        const seasonsList = [] as number[];
        response.data.forEach((data: EpisodeProps) =>
          seasonsList.push(data.number)
        );

        setSeasons(seasonsList);
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("error");
    }
  };

  const getShowEpisodesData = async () => {
    try {
      setLoading(true);
      const response = await getShowEpisodes(params.id);

      if (response.status === 200) {
        setEpisodes(response.data);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("error");
    }
  };

  const filterEpisodesBySeason = () => {
    const filter = episodes.filter(
      (episode: EpisodeProps) => episode.season === season
    );

    setEpisodesBySeason(filter);
  };

  const addShowToFavorite = () => {
    if (show) {
      toggleFavorite(show);
    }
  };

  useEffect(() => {
    getShowDetails();
    getShowSeasonsData();
    getShowEpisodesData();
  }, []);

  useEffect(() => {
    filterEpisodesBySeason();
  }, [episodes, season]);

  useEffect(() => {
    if (show && !!favorites.find((favorite) => favorite.id === show.id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [show, favorites]);

  return (
    <Container>
      <Header favorite={isFavorite} onFav={addShowToFavorite} />

      <ScrollView refreshControl={<RefreshControl refreshing={loading} />}>
        <CoverImage
          source={{
            uri: show?.image?.original,
          }}
          resizeMode="contain"
        />

        <InfoContainer>
          <Wrapper>
            <Row>
              <Title>{show?.name}</Title>

              {show?.rating.average && (
                <Row>
                  <Icon name="star" />

                  <DarkText>{show?.rating.average?.toFixed(1)}</DarkText>
                </Row>
              )}
            </Row>

            <Genres>{show?.genres.join(", ")}</Genres>
          </Wrapper>

          <Wrapper>
            <SubTitle>Summary</SubTitle>

            <DarkText>{show?.summary.replace(/<[^>]*>?/gm, "")}</DarkText>
          </Wrapper>

          <Wrapper>
            <SubTitle>Episodes</SubTitle>

            <StyledPicker
              selectedValue={season}
              onValueChange={(itemValue) => setSeason(Number(itemValue))}
              dropdownIconColor={theme.colors.white}
            >
              {seasons?.map((selectedSeason) => (
                <StyledPicker.Item
                  key={selectedSeason}
                  label={`Season ${selectedSeason}`}
                  value={selectedSeason}
                />
              ))}
            </StyledPicker>

            <EpisodeList>
              {episodesBySeason.map((episode: EpisodeProps) => (
                <EpisodeCard
                  key={episode.id}
                  title={`${episode.name}`}
                  length={episode.runtime}
                  rating={episode.rating?.average}
                  onPress={() => {
                    navigation.navigate("EpisodeDetails", { ...episode });
                  }}
                  image={
                    episode.image ? episode.image.medium : show?.image?.medium
                  }
                />
              ))}
            </EpisodeList>
          </Wrapper>
        </InfoContainer>
      </ScrollView>
    </Container>
  );
};

export default ShowDetails;
