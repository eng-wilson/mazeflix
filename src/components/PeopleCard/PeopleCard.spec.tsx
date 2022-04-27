import { fireEvent, render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import PeopleCard from ".";
import defaultTheme from "../../styles/theme/default";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

describe("PeopleCard Component", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <PeopleCard
        name="any name"
        image="any image"
        onPress={() => {}}
        country={{ name: "any country" }}
      />,
      {
        wrapper: Providers,
      }
    );

    const nameComponent = getByText("any name");

    expect(nameComponent).toBeTruthy();
  });

  it("should call onPress function", () => {
    const mockedFunction = jest.fn();
    const { getByTestId } = render(
      <PeopleCard
        name="any name"
        image="any image"
        onPress={mockedFunction}
        country={{ name: "any country" }}
      />,
      {
        wrapper: Providers,
      }
    );

    const buttonComponent = getByTestId("container");

    fireEvent.press(buttonComponent);

    expect(mockedFunction).toHaveBeenCalled();
  });
});
