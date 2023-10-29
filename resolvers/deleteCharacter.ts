import { Request, Response } from "npm:express@4.18.2";
import { Character } from "../types.ts";
import { characters } from "../main.ts";

const deleteCharacter = (req: Request, res: Response) => {  
  
  try{
    const { id } = req.params;  //Obtengo el id del personaje que se quiere eliminar
    
    //Busco el personaje en el array de personajes. Para ello utilizo el método findIndex, que devuelve el índice del elemento del array que cumpla con la condición que se le pasa como parámetro.
    //Convierto el id a string para poder compararlo con el id del personaje
    const characterIndex = characters.findIndex((character: Character) => character.id.toString() === id);  

    //Si characterIndex es -1, significa que el personaje no se ha encontrado en el array de personajes
    if (characterIndex === -1) {
      return res.status(404).send("Personaje no encontrado");
    }
    
    //Se elimina el elemento del array de personajes en la posición characterIndex.
    characters.splice(characterIndex, 1); //El segundo parámetro indica el número de elementos que se quieren eliminar. En este caso, 1.
    
    res.send(`Personaje con ID ${id} eliminado correctamente`); //Devuelve un mensaje indicando que el personaje se ha eliminado correctamente
  }
  catch(error){ //En caso de error, devuelve el error
    res.status(404).send(error.message);
    return;
  }
};

export default deleteCharacter; //Exporto la función deleteCharacter