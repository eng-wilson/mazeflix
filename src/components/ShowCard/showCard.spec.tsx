import React from "react";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";

import defaultTheme from "../../styles/theme/default";

import ShowCard from "./";

const Providers: React.FC = ({ children }) => (
  <NavigationContainer>
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
  </NavigationContainer>
);

describe("Show Card Component", () => {
  it("should render favorite icon  when favorite is true", () => {
    const { queryByTestId } = render(
      <ShowCard
        title="Downtown"
        genres={["Drama"]}
        rating={{ average: 9 }}
        image="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
        favorite={true}
        onPress={() => {}}
      />,
      { wrapper: Providers }
    );

    const iconContainer = queryByTestId("iconContainer");

    expect(iconContainer).toBeTruthy();
  });

  it("should not render favorite icon when favorite is false", async () => {
    const { queryByTestId } = render(
      <ShowCard
        title="Downtown"
        genres={["Drama"]}
        rating={{ average: 9 }}
        image="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
        favorite={false}
        onPress={() => {}}
      />,
      { wrapper: Providers }
    );

    const iconContainer = await queryByTestId("iconContainer");

    expect(iconContainer).toBeFalsy();
  });

  it("should render genres list when have at least 1 genre", async () => {
    const { queryByText } = render(
      <ShowCard
        title="Downtown"
        genres={["Drama"]}
        rating={{ average: 9 }}
        image="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
        favorite={false}
        onPress={() => {}}
      />,
      { wrapper: Providers }
    );

    const dramaText = await queryByText("Drama");

    expect(dramaText).toBeTruthy();
  });

  it("should render rating average when value exists", async () => {
    const average = 9.5;

    const { queryByText } = render(
      <ShowCard
        title="Downtown"
        genres={["Drama"]}
        rating={{ average }}
        image="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
        favorite={false}
        onPress={() => {}}
      />,
      { wrapper: Providers }
    );

    const averageRating = await queryByText(average.toFixed(1));

    expect(averageRating).toBeTruthy();
  });
});
