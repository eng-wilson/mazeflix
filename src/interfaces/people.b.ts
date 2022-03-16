export type PeopleProps = {
  name: string;

  country:
    | undefined
    | {
        name: string;
      };
  image:
    | undefined
    | {
        medium: string;
        original: string;
      };
  id: number;
};

export type PeopleSearchProps = {
  score: number;
  person: PeopleProps;
};
