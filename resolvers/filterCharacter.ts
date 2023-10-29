import { Request, Response } from "npm:express@4.18.2";
import { Character } from "../types.ts";
import { characters } from "../main.ts";


const filterCharacter = async (req: Request, res: Response) => {
    const {status, gender} = req.params;
    
    const filteredCharacters = characters.filter((character: Character) => {
        return character.status.toLowerCase() === status.toLowerCase() && character.gender.toLowerCase() === gender.toLowerCase();
      });
      
      if (filteredCharacters.length === 0) {
        return res.send("No se encontraron personajes que cumplan con los criterios de búsqueda");
      }
      
      res.send(filteredCharacters);
    };
    
    export default filterCharacter;
