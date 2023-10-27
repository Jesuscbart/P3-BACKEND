import { Request, Response } from "npm:express@4.18.2";
import { Character } from "./types.ts";

const getCharacter = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response = await fetch(
            `https://rickandmortyapi.com/api/character/${id}`
        );
        if (response.status !== 200) {
            res.status(response.status).send(response.statusText);
            return;
        }

        const character: Character = await response.json();

        //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
        const date = new Date(character.created);   //Creo una fecha con el string que nos da la API
        const spanishDate = date.toLocaleDateString("es-ES");  //La paso a formato español con la función toLocaleDateString

        res.send({
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            origin: character.origin.name,
            location: character.location.name,
            created: spanishDate       
        });
    } catch (error) {
        res.status(404).send(error.message);
        return;
    }
};

export default getCharacter;
