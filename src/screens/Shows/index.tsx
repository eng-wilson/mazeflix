import { useNavigation } from "@react-navigation/native";
import { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import Input from "../../components/Input";
import ShowCard from "../../components/ShowCard";

import { StackParamProps } from "../../interfaces/routes.b";
import { ShowProps, ShowSearchProps } from "../../interfaces/shows.b";

import { getShowBySearch, getShows } from "../../services/shows";

import { Container, Row, FilterOption, Divider } from "./styles";

import { useFav } from "../../hooks/favorites";

const Shows = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamProps>>();

  const { favorites } = useFav();

  const [shows, setShows] = useState<ShowProps[]>([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<ShowProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getShowsData = async () => {
    try {
      setLoading(true);
      const result = await getShows(page);

      if (result.status === 200) {
        setShows(result.data);
      }

      setLoading(false);
    } catch (e) {
      console.log("error");
      setLoading(false);
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

  const handleShowSearch = useCallback(async () => {
    try {
      setLoading(true);

      if (filter === "all") {
        const response = await getShowBySearch(search);

        if (response.status === 200) {
          setSearchResult(
            response.data.map((result: ShowSearchProps) => result.show)
          );
        }
      }

      if (filter === "favorites") {
        const filteredList = shows.filter((show) =>
          favorites.includes(show.id)
        );

        setSearchResult(
          filteredList.filter((favorite) => favorite.name.includes(search))
        );
      }

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    getShowsData();
  }, [page]);

  useEffect(() => {
    if (search !== "") {
      handleShowSearch();
    } else {
      setSearchResult([]);
    }
  }, [search]);

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
        data={searchResult.length > 0 ? searchResult : getFilteredList()}
        numColumns={2}
        initialNumToRender={20}
        onRefresh={() => {}}
        refreshing={loading}
        renderItem={({ item }: { item: ShowProps }) => (
          <ShowCard
            key={item.id}
            title={item.name}
            genres={item.genres}
            rating={item.rating}
            image={item.image?.medium}
            favorite={favorites.includes(item.id)}
            onPress={() => navigation.navigate("ShowDetails", { id: item.id })}
          />
        )}
      />
    </Container>
  );
};

export default Shows;
