import { Location } from "./types.ts";

//Función para dar formato a la localización
const formatLocation = (location: Location) => {

    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    const date = new Date(location.created);                //Creo una fecha con el string que nos da la API
    const spanishDate = date.toLocaleDateString("es-ES");   //La paso a formato español con la función toLocaleDateString

    return{
        id: location.id,
        name: location.name,
        type: location.type,
        dimension: location.dimension,
        created: spanishDate       
    };
};

export default formatLocation;    //Exporto la función formatLocation