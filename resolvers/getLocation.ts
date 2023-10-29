import { Request, Response } from "npm:express@4.18.2";
import { Location } from "../types.ts";
import { locations } from "../main.ts";
import formatLocation from "../formatLocation.ts";

const getLocation = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        // Primero, intenta encontrar la localización en el array local
        const existingLocation = locations.find(locat => locat.id === parseInt(id));    //Transformo el id a número entero para poder compararlo con el id de la localización
        if (existingLocation) {
            return res.send(formatLocation(existingLocation));  //Si la encuentra, la devuelve formateada
        }

        const response = await fetch(
            `https://rickandmortyapi.com/api/location/${id}`    //Aquí le paso el id que me llega por parámetro (1-126)
        );
        if (response.status !== 200) {  //Si el estado de la respuesta no es 200 (no está correcto), devuelve el estado y el error
            res.status(response.status).send(response.statusText);
            return;
        }
        //Convierte la respuesta a un objeto JSON
        const location: Location = await response.json();

        // Añade la localización al array local
        locations.push(location);

        //Devuelve la localización formateada
        res.send(formatLocation(location));

        //Imprimo por terminal la información de la localización que se ha añadido al array local
        console.log("Localización con ID: ", location.id, "añadida al array local");
    } 
    catch (error) { //Si no encuentra la localización, devuelve el error
        res.status(404).send(error.message);
        return;
    }
};

export default getLocation;   //Exporto la función getLocation