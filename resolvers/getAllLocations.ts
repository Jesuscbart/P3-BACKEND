import { Request, Response } from "npm:express@4.18.2";
import { Location } from "../types.ts";

const getAllLocations = async (req: Request, res: Response) => {
    try {
      const pageNumber = Number(req.params.pageNumber); //pageNumber es un parámetro que le paso a la url para que me devuelva los personajes de esa página
      const url = `https://rickandmortyapi.com/api/location?page=${pageNumber}`; //pageNumber es un parámetro que le paso a la url que va desde el 1 al 7
      const response = await fetch(url);  //Envía una petición GET a la url. La respuesta es un objeto Response
      const data = await response.json(); //Convierte la respuesta a un objeto JSON
      const names: string[] = []; //Creo un array vacío de tipo string donde se van a almacenar los nombres de las localizaciones
  
      //Se verifica que la respuesta tenga datos y que el array results tenga más de 0 elementos.
      if (data && data.results && data.results.length > 0) {  //Si se cumple, se recorre el array results y se añaden los nombres al array names
        data.results.forEach((location: any) => {
          names.push(location.name);  //Añado el nombre de la localización al array names
        });
      }
      
      //Utilizo el método map para recorrer el array names y devolver un nuevo array listItems con los nombres de las localizaciones
      const listItems = names.map((name) => `${name}`);
      res.send(listItems);  //Envío el array listItems
    } 
    catch (error) { //Si se produce un error, lo imprimo por consola y devuelvo un mensaje de error
      console.error(error);
      res.status(500).send("Ha ocurrido un error");
    }
  };
  
  export default getAllLocations; //Exporto la función getAllLocations
  
  