import styled from "styled-components/native";

interface FilterProps {
  active?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray900};

  padding: 20px 20px 0px 20px;
`;

export const Row = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 30px;
`;

export const FilterOption = styled.Text<FilterProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;

  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.gray400};
`;

export const Divider = styled.View`
  height: 15px;

  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.colors.gray400};
`;
