module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: ["/node_modules", "assets", ".expo", ".expo-shared"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components",
  ],
};
