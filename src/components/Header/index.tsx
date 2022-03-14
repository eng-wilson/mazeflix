import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Container, Icon, IconContainer } from "./styles";

const Header = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <IconContainer onPress={navigation.goBack}>
        <Icon name="arrow-left" />
      </IconContainer>

      <IconContainer>
        <Icon name="heart" />
      </IconContainer>
    </Container>
  );
};

export default Header;
