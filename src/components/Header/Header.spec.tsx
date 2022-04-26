import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import defaultTheme from "../../styles/theme/default";
import Header from ".";
import { NavigationContainer } from "@react-navigation/native";

const Providers: React.FC = ({ children }) => (
  <NavigationContainer>
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
  </NavigationContainer>
);

describe("Header Component", () => {
  it("should render favorite button color with correct colors when favorite is true", () => {
    const { queryByText } = render(
      <Header favorite={true} onFav={() => {}} />,
      {
        wrapper: Providers,
      }
    );

    const favoriteText = queryByText("Favorite");

    expect(favoriteText.props.style[0].color).toEqual(
      defaultTheme.colors.black
    );
  });

  it("should render favorite button color with correct colors when favorite is false", () => {
    const { queryByText } = render(
      <Header favorite={false} onFav={() => {}} />,
      {
        wrapper: Providers,
      }
    );

    const favoriteText = queryByText("Favorite");

    expect(favoriteText.props.style[0].color).toEqual(
      defaultTheme.colors.gray400
    );
  });

  it("should not render favorite button when favorite function is null", () => {
    const { queryByText } = render(<Header favorite={false} />, {
      wrapper: Providers,
    });

    const favoriteText = queryByText("Favorite");

    expect(favoriteText).toBeFalsy();
  });
});
