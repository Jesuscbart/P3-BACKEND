import express, { Request, Response } from "npm:express@4.18.2";
import { Character } from "./types.ts";
import { Location } from "./types.ts";
import getAllCharacters from "./resolvers/getAllCharacters.ts";
import getCharacter from "./resolvers/getCharacter.ts";
import getAllLocations from "./resolvers/getAllLocations.ts";
import getLocation from "./resolvers/getLocation.ts";
import filterCharacter from "./resolvers/filterCharacter.ts";
import deleteCharacter from "./resolvers/deleteCharacter.ts";

export const characters: Character[] = [];

export const locations: Location[] = [];


const app = express()   //Creo app

app
    //Ejercicio 1 - Listar todos los personajes de manera paginada
    .get("/allcharacters/:pageNumber", getAllCharacters)    
    
    //Ejercicio 2 - Obtener un personaje específico
    .get("/character/:id", getCharacter)

    //Ejercicio 3 - Listar todas las localizaciones de manera paginada
    .get("/alllocations/:pageNumber", getAllLocations)

    //Ejercicio 4 
    .get("/location/:id", getLocation)

    .get("/array", async (req: Request, res: Response) => {
        for (const character of characters) {
            console.log(character.name, character.status, character.gender);
          }
          console.log("=====================================")
          
          res.send(characters);
        })
        
    //Ejercicio 5
    .get("/filtercharacter/:status/:gender", filterCharacter)

    .delete("/deletecharacter/:id", deleteCharacter);

    //Puerto 3000
    app.listen(3000);   


