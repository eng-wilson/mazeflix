import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;

      blue400: string;

      green400: string;

      red400: string;

      yellow300: string;

      gray400: string;
      gray700: string;
      gray900: string;
    };
  }
}
