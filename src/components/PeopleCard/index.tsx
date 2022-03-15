import React from "react";

import { Container, DarkText, Image, Title } from "./styles";

interface Props {
  name: string;
  country:
    | undefined
    | {
        name: string;
      };

  image: string | undefined;

  onPress: () => void;
}

const PeopleCard = ({ name, country, image, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Image source={{ uri: image }} />

      <Title>{name}</Title>

      <DarkText>{country?.name}</DarkText>
    </Container>
  );
};

export default PeopleCard;
