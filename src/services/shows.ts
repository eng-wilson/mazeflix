import { API } from ".";

export const getShows = async (page: number) => {
  return API.get(`/shows?page=${page}`);
};

export const getShowById = async (id: number) => {
  return API.get(`/shows/${id}`);
};

export const getShowSeasons = async (id: number) => {
  return API.get(`/shows/${id}/seasons`);
};

export const getShowEpisodes = async (id: number) => {
  return API.get(`/shows/${id}/episodes`);
};
