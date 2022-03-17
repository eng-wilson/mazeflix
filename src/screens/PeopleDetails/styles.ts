import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray900};

  padding-top: 20px;
`;

export const CoverImage = styled.Image`
  width: 50%;
  aspect-ratio: 1;

  border-radius: 10px;

  align-self: center;
`;

export const InfoContainer = styled.View`
  padding: 0px 20px;
`;

export const Wrapper = styled.View`
  width: 100%;

  margin-top: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;

  text-align: center;

  color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;

  text-align: center;

  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 6px;
`;

export const DarkText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;

  text-align: center;

  color: ${({ theme }) => theme.colors.gray400};
`;

export const EpisodeList = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;

  margin-top: 10px;
`;

export const StyledPicker = styled(Picker)`
  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled(FontAwesome)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.yellow300};

  margin-right: 6px;
`;

export const ShowCardContainer = styled.View`
  width: 50%;
`;
