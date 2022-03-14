import { EpisodeProps } from "./shows.b";

export type StackParamProps = {
  Shows: undefined;
  ShowDetails: {
    id: number;
  };
  EpisodeDetails: EpisodeProps;
};
