import { Request, Response } from "npm:express@4.18.2";
import { Character } from "../types.ts";
import { characters } from "../main.ts";
import formatCharacter from "../formatCharacter.ts";

const filterCharacter = (req: Request, res: Response) => {

    try{
        const { status, gender } = req.params;  //Obtengo los parámetros de búsqueda del personaje
        
        const filteredCharacters = characters.filter((character: Character) => {  //Filtro los personajes que cumplan con los criterios de búsqueda
            let statusFind = true, genderFind = true; //Inicializo dos variables de tipo booleano a true que corresponden con los criterios de búsqueda
            
            if (status) { //Si el criterio de búsqueda es Status, comprueba si el status del personaje coincide con el status que se ha pasado por parámetro
                statusFind = character.status.toLowerCase() === status.toLowerCase(); //Se pasa todo a minúsculas para que no haya problemas de mayúsculas
            } //Si los valores coinciden, la variable statusFind se mantiene a true
            
            if (gender) { //Si el criterio de búsqueda es Gender, comprueba si el gender del personaje coincide con el gender que se ha pasado por parámetro
                genderFind = character.gender.toLowerCase() === gender.toLowerCase(); //Se pasa todo a minúsculas para que no haya problemas de mayúsculas
            } //Si los valores coinciden, la variable genderFind se mantiene a true
            
            return statusFind && genderFind;  //Devuelve true si los valores coinciden, es decir, si los dos criterios de búsqueda se cumplen
            });

        if (filteredCharacters.length === 0) {    //Si no se encuentra ningún personaje que cumpla con los criterios de búsqueda, devuelve un mensaje
            return res.status(404).send("No se encontraron personajes que cumplan con los criterios de búsqueda");
        }
            
        //Si se encuentran personajes que cumplan con los criterios de búsqueda, los devuelve formateados
        const formattedCharacters = filteredCharacters.map(formatCharacter);

        res.send(formattedCharacters);    //Envía el array de personajes formateados
    } 
    catch(error){  //En caso de error, devuelve el error
        res.status(404).send(error.message);
        return;
    }
};

export default filterCharacter; //Exporto la función filterCharacter