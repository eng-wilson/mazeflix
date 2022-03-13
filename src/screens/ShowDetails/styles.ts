import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray900};

  padding: 20px 20px 0px 20px;
`;

export const CoverImage = styled.Image`
  width: 100%;

  height: 300px;
`;

export const InfoContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.gray900};
  top: -20px;
  padding: 10px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Wrapper = styled.View`
  width: 100%;

  margin-top: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;

  color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.white};
`;

export const Genres = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.gray400};
`;

export const DarkText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.gray400};
`;
