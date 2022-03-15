import { useNavigation } from "@react-navigation/native";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import Input from "../../components/Input";
import ShowCard from "../../components/ShowCard";

import { StackParamProps } from "../../interfaces/routes.b";
import { ShowProps } from "../../interfaces/shows.b";

import { getShows } from "../../services/shows";

import { Container, Row, FilterOption, Divider } from "./styles";

import { useFav } from "../../hooks/favorites";

const Shows = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamProps>>();
  const { favorites } = useFav();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [shows, setShows] = useState<ShowProps[]>([]);
  const [filter, setFilter] = useState("all");

  const getShowsData = async () => {
    try {
      const result = await getShows(page);

      if (result.status === 200) {
        setShows(result.data);
      }
    } catch (e) {
      console.log("error");
    }
  };

  const setFilterToAll = () => {
    setFilter("all");
  };

  const setFilterToFavorites = () => {
    setFilter("favorites");
  };

  function sortByShowName(a: ShowProps, b: ShowProps) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  const getFilteredList = () => {
    if (filter === "all") {
      return shows;
    } else {
      const filteredList = shows.filter((show) => favorites.includes(show.id));

      return filteredList.sort(sortByShowName);
    }
  };

  useEffect(() => {
    getShowsData();
  }, [page]);

  return (
    <Container>
      <Row>
        <TouchableOpacity onPress={setFilterToAll}>
          <FilterOption active={filter === "all"}>All</FilterOption>
        </TouchableOpacity>

        <Divider />

        <TouchableOpacity onPress={setFilterToFavorites}>
          <FilterOption active={filter === "favorites"}>Favorites</FilterOption>
        </TouchableOpacity>
      </Row>

      <Input placeholder="Search" value={search} onChange={setSearch} />

      <FlatList
        data={getFilteredList()}
        numColumns={2}
        initialNumToRender={20}
        renderItem={({ item }: { item: ShowProps }) => (
          <ShowCard
            key={item.id}
            title={item.name}
            genres={item.genres}
            rating={item.rating}
            image={item.image.medium}
            favorite={favorites.includes(item.id)}
            onPress={() => navigation.navigate("ShowDetails", { id: item.id })}
          />
        )}
      />
    </Container>
  );
};

export default Shows;
