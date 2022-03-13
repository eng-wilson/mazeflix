import Reactotron from "reactotron-react-native";

declare global {
  interface Console {
      tron: any
  }
}

const tron = Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = tron;

export default tron;
