export interface Character {
    ID: number;
    Name: string;
    Status: string;
    Species: string;
    Gender: string;
    Origin: Origin;
    Location: Location;
    Created: Fecha;
  };
  
  export type Fecha = {
    dia: number;
    mes: number;
    año: number;
  };
  
  export type Origin = {
    name: string;
    url: string;
  };

  export type Location = {
    name: string;
    url: string;
};

export interface Pagination { 
  currentPage: null;          //Página actual
  nextPage:    null;          //Página siguiente
  totalPages:  null;          //Total de páginas
}
