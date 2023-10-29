import { Request, Response } from "npm:express@4.18.2";
import { Character } from "../types.ts";
import { characters } from "../main.ts";

const deleteCharacter = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const characterIndex = characters.findIndex((character: Character) => character.id.toString() === id);

  if (characterIndex === -1) {
    return res.status(404).send("Personaje no encontrado");
  }
  
  characters.splice(characterIndex, 1);
  
  res.send(`Personaje con ID ${id} eliminado correctamente`);
};

export default deleteCharacter;