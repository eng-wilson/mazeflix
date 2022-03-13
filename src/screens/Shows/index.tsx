import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";

import Input from "../../components/Input";
import ShowCard from "../../components/ShowCard";

import { Container, Row, FilterOption, Divider } from "./styles";

const Shows = () => {
  const [search, setSearch] = useState("");

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

      <FlatList data={[1, 2, 3]} renderItem={({ item }) => <ShowCard />} />
    </Container>
  );
};

export default Shows;
