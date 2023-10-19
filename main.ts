import express, { Request, Response } from "npm:express@4.18.2";
import getCharacter from "./getCharacter.ts";


const app = express()   //Creo app

app

    //Ejercicio 1
    .get("/character", async (req: Request, res: Response) => {
      try {
        let page = 1;                               //Página inicial
        let characters = await getCharacter(page);  //Llamo a la función que he creado en getCharacter.ts y paso la página inicial como parámetro
        const names: string[] = [];                 //Array de nombres
  
        while (characters && characters.results && characters.results.length > 0) { //Mientras haya resultados
          characters.results.forEach((character: any) => {                          //Recorro los resultados
            names.push(character.name);                                             //Añado el nombre al array
          });
          page++;                                    //Incremento la página
          characters = await getCharacter(page);     //Vuelvo a llamar a la función con la página incrementada
        }
  
        const listItems = names.map((name) => `${name}`)  //.join(""); 
        res.send(listItems);
        
      } 
      
      catch (error) {
        console.error(error);
        res.status(500).send("Ha ocurrido un error");
      }
    });
      
//Puerto 3000
app.listen(3000);   

//Mal. Tengo q poner que acceda a una página en concreto
//Escribir "deno task dev"

