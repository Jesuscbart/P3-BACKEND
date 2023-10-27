import express, { Request, Response } from "npm:express@4.18.2";
import getAllCharacters from "./getAllCharacters.ts";
import getCharacter from "./getCharacter.ts";


const app = express()   //Creo app

app
    //Ejercicio 1
    .get("/allcharacters/:pageNumber", getAllCharacters)
    
    //Ejercicio 2
    .get("/character/:id", getCharacter);
      





//Puerto 3000
app.listen(3000);   


