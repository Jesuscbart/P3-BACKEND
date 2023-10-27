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
  
  /*export type Fecha = {
    day: number;
    month: number;
    year: number;
  };*/
  
  export type Origin = {
    name: string;
    url: string;
  };

  export type Location = {
    name: string;
    url: string;
};

/*export interface Pagination { 
  currentPage: null;          //Página actual
  nextPage:    null;          //Página siguiente
  totalPages:  null;          //Total de páginas
}*/
