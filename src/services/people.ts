import { API } from ".";

export const getPeople = async (page: number) => {
  return API.get(`/people?page=${page}`);
};

export const getPeopleCast = async (id: number) => {
  return API.get(`/people/${id}/castcredits?embed=show`);
};

export const getPeopleBySearch = async (query: string) => {
  return API.get(`search/people?q=${query}`);
};
