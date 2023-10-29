import express, { Request, Response } from "npm:express@4.18.2";  //Importo express
import { Character } from "./types.ts";                           //Importo el tipo Character
import { Location } from "./types.ts";                            //Importo el tipo Location
import formatCharacter from "./formatCharacter.ts";               //Importo la función formatCharacter
import getAllCharacters from "./resolvers/getAllCharacters.ts";   //Ejercicio 1
import getCharacter from "./resolvers/getCharacter.ts";           //Ejercicio 2
import getAllLocations from "./resolvers/getAllLocations.ts";     //Ejercicio 3
import getLocation from "./resolvers/getLocation.ts";             //Ejercicio 4
import filterCharacter from "./resolvers/filterCharacter.ts";     //Ejercicio 5
import filterLocation from "./resolvers/filterLocation.ts";       //Ejercicio 6
import deleteCharacter from "./resolvers/deleteCharacter.ts";     //Ejercicio 7
import deleteLocation from "./resolvers/deleteLocation.ts";       //Ejercicio 8

export const characters: Character[] = [];          //Creo array de personajes
export const locations: Location[] = [];            //Creo array de localizaciones

const app = express()   //Creo app

app
    //Ejercicio 1 - Listar todos los personajes de manera paginada
    .get("/allcharacters/:pageNumber", getAllCharacters)    
    
    //Ejercicio 2 - Obtener un personaje específico
    .get("/character/:id", getCharacter)

    //Ejercicio 3 - Listar todas las localizaciones de manera paginada
    .get("/alllocations/:pageNumber", getAllLocations)

    //Ejercicio 4 - Listar una localización específica
    .get("/location/:id", getLocation)
    
    //Ejercicio 5 - Filtrar personajes
    .get("/filtercharacter/status/:status", filterCharacter)                  // Solo status  
    .get("/filtercharacter/gender/:gender", filterCharacter)                  // Solo gender
    .get("/filtercharacter/status/:status/gender/:gender", filterCharacter)   // Ambos filtros
    
    //Ejercicio 6 - Filtrar localizaciones
    .get("/filterlocation/type/:type", filterLocation)                        // Solo type  
    .get("/filterlocation/dimension/:dimension", filterLocation)              // Solo dimension
    .get("/filterlocation/type/:type/dimension/:dimension", filterLocation)   // Ambos filtros

    //Ejercicio 7 - Eliminar personajes
    .delete("/deletecharacter/:id", deleteCharacter)

    //Ejercicio 8 - Eliminar localizaciones
    .delete("/deletelocation/:id", deleteLocation)


    //Método GET para mostrar por pantalla y por terminal el contenido del array de personajes
    .get("/arrayc", async (req: Request, res: Response) => {
            for (const character of characters) {
                console.log("ID: ",character.id, " | Nombre: ", character.name," | Status: ", character.status, " | Gender: ", character.gender);
              }
              console.log("===========================================================")
              const formattedCharacters = characters.map(formatCharacter);
              res.send(formattedCharacters);
    })

    //Método GET para mostrar por pantalla y por terminal el contenido del array de localizaciones
    .get("/arrayl", async (req: Request, res: Response) => {
      for (const location of locations) {
          console.log("ID: ",location.id, " | Nombre: ", location.name," | Type: ", location.type, " | Dimension: ", location.dimension);
        }
        console.log("===========================================================")
        
        res.send(locations);
    });

    //Puerto 3000 para que se ejecute en localhost:3000
    app.listen(3000);   


