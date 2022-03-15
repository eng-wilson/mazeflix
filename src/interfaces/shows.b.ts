export type ShowProps = {
  name: string;
  genres: string[];
  rating: {
    average: number | undefined;
  };
  image:
    | undefined
    | {
        medium: string;
        original: string;
      };
  id: number;
  summary: string;
};

export type EpisodeProps = {
  id: number;
  season: number;
  number: number;
  name: string;
  runtime: number;
  image:
    | undefined
    | {
        medium: string;
        original: string;
      };
  rating: {
    average: number;
  };
  summary: string | undefined;
};

export type ShowSearchProps = {
  score: number;
  show: ShowProps;
};
