import { Request, Response } from "npm:express@4.18.2";
import { Character } from "../types.ts";

  
const getAllCharacters = async (req: Request, res: Response) => {
  try {
    const pageNumber = Number(req.params.pageNumber);
    const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`; //pageNumber es un parámetro que le paso a la url que va desde el 1 al 42
    const response = await fetch(url);
    const data = await response.json();
    const names: string[] = [];

    if (data && data.results && data.results.length > 0) {
      data.results.forEach((character: any) => {
        names.push(character.name);
      });
    }

    const listItems = names.map((name) => `${name}`);
    res.send(listItems);
  } 
  catch (error) {
    console.error(error);
    res.status(500).send("Ha ocurrido un error");
  }
};

export default getAllCharacters;

