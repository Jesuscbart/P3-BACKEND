import express, { Request, Response } from "npm:express@4.18.2";
import getAllCharacters from "./resolvers/getAllCharacters.ts";
import getCharacter from "./resolvers/getCharacter.ts";
import getAllLocations from "./resolvers/getAllLocations.ts";
import getLocation from "./resolvers/getLocation.ts";
//import filterCharacter from "./resolvers/filterCharacter.ts";


const app = express()   //Creo app

app
    //Ejercicio 1
    .get("/allcharacters/:pageNumber", getAllCharacters)
    
    //Ejercicio 2
    .get("/character/:id", getCharacter)

    //Ejercicio 3
    .get("/alllocations/:pageNumber", getAllLocations)

    //Ejercicio 4
    .get("/location/:id", getLocation);
      





//Puerto 3000
app.listen(3000);   


