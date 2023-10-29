export type Character = { //Defino el tipo Character
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: Origin;
    location: Location;
    created: Date;
  };
  
  export type Origin = {  //Defino el tipo Origin
    name: string;
    url: string;
  };

  export type Location = {  //Defino el tipo Location
    id: number;
    name: string;
    type: string;
    dimension: string;
    created: Date;
};
