import React from "react";
import { FlatList, Text } from "react-native";
import ShowCard from "../../components/ShowCard";

import { Container } from "./styles";

const Shows = () => {
  return (
    <Container>
      <FlatList data={[1, 2, 3]} renderItem={({ item }) => <ShowCard />} />
    </Container>
  );
};

export default Shows;
