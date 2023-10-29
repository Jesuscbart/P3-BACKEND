import { Character } from "./types.ts";

//Función que da formato al personaje
const formatCharacter = (character: Character) => {

    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    const date = new Date(character.created);                   //Creo una fecha con el string que nos da la API
    const spanishDate = date.toLocaleDateString("es-ES");       //La paso a formato español con la función toLocaleDateString
    return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        origin: character.origin.name,
        location: character.location.name,
        created: spanishDate       
    };
}; 

export default formatCharacter;    //Exporto la función formatCharacter