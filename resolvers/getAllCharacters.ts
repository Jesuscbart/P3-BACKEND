import { Request, Response } from "npm:express@4.18.2";
import { Character } from "../types.ts";

const getAllCharacters = async (req: Request, res: Response) => {
  try {
    const pageNumber = Number(req.params.pageNumber); //pageNumber es un parámetro que le paso a la url para que me devuelva los personajes de esa página
    const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`; //pageNumber es un parámetro que le paso a la url que va desde el 1 al 42
    const response = await fetch(url);  //Envía una petición GET a la url. La respuesta es un objeto Response
    const data = await response.json(); //Convierte la respuesta a un objeto JSON
    const names: string[] = []; //Creo un array vacío de tipo string donde se van a almacenar los nombres de los personajes

    //Se verifica que la respuesta tenga datos y que el array results tenga más de 0 elementos.
    if (data && data.results && data.results.length > 0) {  //Si se cumple, se recorre el array results y se añaden los nombres al array names
      data.results.forEach((character: any) => {
        names.push(character.name); //Añado el nombre del personaje al array names
      });
    }

    //Utilizo el método map para recorrer el array names y devolver un nuevo array listItems con los nombres de los personajes
    const listItems = names.map((name) => `${name}`); 
    res.send(listItems);  //Envío el array listItems
  } 
  catch (error) { //Si se produce un error, lo imprimo por consola y devuelvo un mensaje de error
    console.error(error);
    res.status(500).send("Ha ocurrido un error");
  }
};

export default getAllCharacters;  //Exporto la función getAllCharacters

