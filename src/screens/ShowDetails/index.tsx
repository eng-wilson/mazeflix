import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import EpisodeCard from "../../components/EpisodeCard";
import Header from "../../components/Header";

import { StackParamProps } from "../../interfaces/routes.b";

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
} from "./styles";

interface ShowsProps {
  name: string;
  genres: string[];
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  id: number;
  summary: string;
}

interface EpisodeProps {
  season: number;
  number: number;
  name: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  rating: {
    average: number;
  };
}

const ShowDetails = () => {
  const [season, setSeason] = useState(1);
  const [seasons, setSeasons] = useState<number[]>();
  const [episodes, setEpisodes] = useState([]);

  const [episodesBySeason, setEpisodesBySeason] = useState([]);
  const [show, setShow] = useState<ShowsProps>();
  const { params } = useRoute<RouteProp<StackParamProps, "ShowDetails">>();

  const getShowDetails = async () => {
    try {
      const response = await getShowById(params.id);

      if (response.status === 200) {
        setShow(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getShowSeasonsData = async () => {
    try {
      const response = await getShowSeasons(params.id);

      if (response.status === 200) {
        const seasonsList = [] as number[];
        response.data.forEach((data: EpisodeProps) =>
          seasonsList.push(data.number)
        );

        setSeasons(seasonsList);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getShowEpisodesData = async () => {
    try {
      const response = await getShowEpisodes(params.id);

      if (response.status === 200) {
        setEpisodes(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const filterEpisodesBySeason = () => {
    const filter = episodes.filter(
      (episode: EpisodeProps) => episode.season === season
    );

    setEpisodesBySeason(filter);
  };

  useEffect(() => {
    getShowDetails();
    getShowSeasonsData();
    getShowEpisodesData();
  }, []);

  useEffect(() => {
    filterEpisodesBySeason();
  }, [episodes, season]);

  return (
    <Container>
      <Header />

      <ScrollView>
        <CoverImage
          source={{
            uri: show?.image.original,
          }}
        />

        <InfoContainer>
          <Wrapper>
            <Title>{show?.name}</Title>

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
            >
              {seasons?.map((selectedSeason) => (
                <StyledPicker.Item
                  label={`Season ${selectedSeason}`}
                  value={selectedSeason}
                />
              ))}
            </StyledPicker>

            <EpisodeList>
              {episodesBySeason.map((episode: EpisodeProps) => (
                <EpisodeCard
                  title={`${episode.name}`}
                  length={episode.runtime}
                  rating={episode.rating?.average}
                  onPress={() => {}}
                  image={
                    episode.image ? episode.image.medium : show?.image.medium
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
