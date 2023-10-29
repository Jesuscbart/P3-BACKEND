import {Request, Response} from "npm:express@4.18.2";
import {Location} from "../types.ts";
import {locations} from "../main.ts";
import formatLocation from "../formatLocation.ts";

const filterLocation = (req: Request, res: Response) => {

  try {
      const { type, dimension } = req.params; //Obtengo los parámetros de búsqueda de la localización

      const filteredLocations = locations.filter((location: Location) => {  //Filtro las localizaciones que cumplan con los criterios de búsqueda
          let typeFind = true, dimensionFind = true;  //Inicializo dos variables de tipo booleano a true que corresponden con los criterios de búsqueda
        
          if (type) { //Si el criterio de búsqueda es Type, comprueba si el type de la localización coincide con el type que se ha pasado por parámetro
              typeFind = location.type.toLowerCase() === type.toLowerCase();  //Se pasa todo a minúsculas para que no haya problemas de mayúsculas
          } //Si los valores coinciden, la variable typeFind se mantiene a true
          
          if (dimension) {  //Si el criterio de búsqueda es Dimension, comprueba si la dimension de la localización coincide con la dimension que se ha pasado por parámetro
              dimensionFind = location.dimension.toLowerCase() === dimension.toLowerCase(); //Se pasa todo a minúsculas para que no haya problemas de mayúsculas
          } //Si los valores coinciden, la variable dimensionFind se mantiene a true
          
          return typeFind && dimensionFind; //Devuelve true si los valores coinciden, es decir, si los dos criterios de búsqueda se cumplen
        });
        
        if (filteredLocations.length === 0) { //Si no se encuentra ninguna localización que cumpla con los criterios de búsqueda, devuelve un mensaje
          return res.status(404).send("No se encontraron personajes que cumplan con los criterios de búsqueda");
        }

        // Si se encuentran localizaciones que cumplan con los criterios de búsqueda, las devuelve formateadas
        const formattedLocations = filteredLocations.map(formatLocation); 

        res.send(formattedLocations); //Envía el array de localizaciones formateadas
  }
  catch(error){ //En caso de error, devuelve el error
    res.status(404).send(error.message);
    return;
  }
};

export default filterLocation;  //Exporto la función filterLocation