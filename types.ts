export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: Origin;
    location: Location;
    created: Date;
  };
  
  export type Origin = {
    name: string;
    url: string;
  };

  export type Location = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    created: Date;
};
