import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import ShowCard from "../../components/ShowCard";

import { Container, Row, FilterOption, Divider } from "./styles";

const Shows = () => {
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

      <FlatList data={[1, 2, 3]} renderItem={({ item }) => <ShowCard />} />
    </Container>
  );
};

export default Shows;
