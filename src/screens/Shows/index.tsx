import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";

import Input from "../../components/Input";
import ShowCard from "../../components/ShowCard";

import { getShows } from "../../services/shows";

import { Container, Row, FilterOption, Divider } from "./styles";

interface ShowsProps {
  name: string;
  status: string;
  genres: string[];
  rating: {
    average: number;
  };
  image: {
    medium: string;
  };
}

const Shows = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [shows, setShows] = useState([]);

  const getShowsData = async () => {
    try {
      const result = await getShows(page);

      if (result.status === 200) {
        setShows(result.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getShowsData();
  }, [page]);

  return (
    <Container>
      <Row>
        <TouchableOpacity>
          <FilterOption active>All</FilterOption>
        </TouchableOpacity>

        <Divider />

        <TouchableOpacity>
          <FilterOption>Favorites</FilterOption>
        </TouchableOpacity>
      </Row>

      <Input placeholder="Search" value={search} onChange={setSearch} />

      <FlatList
        data={shows}
        renderItem={({ item }: { item: ShowsProps }) => (
          <ShowCard
            title={item.name}
            status={item.status}
            genres={item.genres}
            rating={item.rating.average}
            image={item.image.medium}
          />
        )}
      />
    </Container>
  );
};

export default Shows;
