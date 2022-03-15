import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Input from "../../components/Input";
import PeopleCard from "../../components/PeopleCard";
import { PeopleProps } from "../../interfaces/people.b";
import { getPeople } from "../../services/people";

import { Container } from "./styles";

const People = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState<PeopleProps[]>([]);

  const getPeopleData = async () => {
    try {
      const result = await getPeople(page);

      if (result.status === 200) {
        setPeople(result.data);
      }
    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    getPeopleData();
  }, []);

  return (
    <Container>
      <Input placeholder="Search" value={search} onChange={setSearch} />

      <FlatList
        data={people}
        numColumns={2}
        initialNumToRender={20}
        renderItem={({ item }: { item: PeopleProps }) => (
          <PeopleCard
            key={item.id}
            name={item.name}
            country={item.country}
            image={item.image?.medium}
            onPress={() => {}}
          />
        )}
      />
    </Container>
  );
};

export default People;
