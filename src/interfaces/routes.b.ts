import { PeopleProps } from "./people.b";
import { EpisodeProps } from "./shows.b";

export type StackParamProps = {
  Shows: undefined;
  ShowDetails: {
    id: number;
  };
  EpisodeDetails: EpisodeProps;
  PeopleDetails: PeopleProps;
};
