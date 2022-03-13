import { API } from ".";

export const getShows = async (page: number) => {
  return API.get(`/shows?page=${page}`);
};
