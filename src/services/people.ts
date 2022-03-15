import { API } from ".";

export const getPeople = async (page: number) => {
  return API.get(`/people?page=${page}`);
};
