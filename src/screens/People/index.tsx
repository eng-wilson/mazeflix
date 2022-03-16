import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

import Input from "../../components/Input";
import PeopleCard from "../../components/PeopleCard";

import { PeopleProps, PeopleSearchProps } from "../../interfaces/people.b";
import { StackParamProps } from "../../interfaces/routes.b";

import { getPeople, getPeopleBySearch } from "../../services/people";

import { Container } from "./styles";

const People = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamProps>>();

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState<PeopleProps[]>([]);
  const [searchResult, setSearchResult] = useState<PeopleProps[]>([]);

  const getPeopleData = async () => {
    try {
      setLoading(true);

      const result = await getPeople(page);

      if (result.status === 200) {
        setPeople(result.data);
      }

      setLoading(false);
    } catch (e) {
      console.log("error");
      setLoading(false);
    }
  };

  const handlePeopleSearch = useCallback(async () => {
    try {
      setLoading(true);

      const response = await getPeopleBySearch(search);

      if (response.status === 200) {
        setSearchResult(
          response.data.map((result: PeopleSearchProps) => result.person)
        );
      }

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    getPeopleData();
  }, []);

  useEffect(() => {
    handlePeopleSearch();
  }, [search]);

  return (
    <Container>
      <Input placeholder="Search" value={search} onChange={setSearch} />

      <FlatList
        data={searchResult.length > 0 ? searchResult : people}
        numColumns={2}
        initialNumToRender={20}
        onRefresh={() => {}}
        refreshing={loading}
        renderItem={({ item }: { item: PeopleProps }) => (
          <PeopleCard
            key={item.id}
            name={item.name}
            country={item.country}
            image={item.image?.medium}
            onPress={() => navigation.navigate("PeopleDetails", { ...item })}
          />
        )}
      />
    </Container>
  );
};

export default People;
