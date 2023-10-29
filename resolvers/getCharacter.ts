import { Request, Response } from "npm:express@4.18.2"; 
import { Character } from "../types.ts";
import { characters } from "../main.ts";
import formatCharacter from "../formatCharacter.ts";

const getCharacter = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        // Primero, intenta encontrar el personaje en el array local
        const existingCharacter = characters.find(charact => charact.id === parseInt(id));  //Transformo el id a número entero para poder compararlo con el id del personaje
        if (existingCharacter) {    
            return res.send(formatCharacter(existingCharacter));    //Si lo encuentra, lo devuelve formateado
        }
        
        const response = await fetch(   
            `https://rickandmortyapi.com/api/character/${id}`   //Aquí le paso el id que me llega por parámetro (1-826)
        );
        if (response.status !== 200) {  //Si el estado de la respuesta no es 200 (no está correcto), devuelve el estado y el error
            res.status(response.status).send(response.statusText);
            return;
        }
        //Convierte la respuesta a un objeto JSON
        const character: Character = await response.json();

        // Añade el personaje al array local
        characters.push(character);
        
        //Devuelve el personaje formateado
        res.send(formatCharacter(character));
        
        //Imprimo por terminal la información del personaje que se ha añadido al array local
        console.log("Personaje con ID: ", character.id, "añadido al array local");

    } 
    catch (error) { //Si no encuentra el personaje, devuelve el error
        res.status(404).send(error.message);
        return;
    }
};

export default getCharacter;    //Exporto la función getCharacter

