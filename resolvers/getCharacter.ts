import { Request, Response } from "npm:express@4.18.2";
import { Character } from "../types.ts";
import { characters } from "../main.ts";


const getCharacter = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;

        // Primero, intenta encontrar el personaje en el array local
        const existingCharacter = characters.find(c => c.id === parseInt(id));
        if (existingCharacter) {
            return res.send(formatCharacter(existingCharacter));
        }
        
        const response = await fetch(
            `https://rickandmortyapi.com/api/character/${id}`   //Aquí le paso el id que me llega por parámetro (1-826)
        );
        if (response.status !== 200) {
            res.status(response.status).send(response.statusText);
            return;
        }

        const character: Character = await response.json();

        // Añade el personaje al array local
        characters.push(character);
        
        res.send(formatCharacter(character));

    } 
    catch (error) {
        res.status(404).send(error.message);
        return;
    }
};

const formatCharacter = (character: Character) => {
    
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    const date = new Date(character.created);                   //Creo una fecha con el string que nos da la API
    const spanishDate = date.toLocaleDateString("es-ES");       //La paso a formato español con la función toLocaleDateString

    return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        origin: character.origin.name,
        location: character.location.name,
        created: spanishDate       
    };
}
export default getCharacter;

