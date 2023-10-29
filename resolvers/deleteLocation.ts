import { Request, Response } from "npm:express@4.18.2";
import { Location } from "../types.ts";
import { locations } from "../main.ts";

const deleteLocation = (req: Request, res: Response) => {   

    try {
        const { id } = req.params;  //Obtengo el id de la localización que se quiere eliminar
        
        //Busco la localización en el array de localizaciones. Para ello utilizo el método findIndex, que devuelve el índice del elemento del array que cumpla con la condición que se le pasa como parámetro.
        //Convierto el id a string para poder compararlo con el id de la localización
        const locationIndex = locations.findIndex((location: Location) => location.id.toString() === id);
        
        //Si locationIndex es -1, significa que la localización no se ha encontrado en el array de localizaciones
        if (locationIndex === -1) {
            return res.status(404).send("Localización no encontrada");
        }

        //Se elimina el elemento del array de localizaciones en la posición locationIndex.
        locations.splice(locationIndex, 1); //El segundo parámetro indica el número de elementos que se quieren eliminar. En este caso, 1.
        
        res.send(`Localización con ID ${id} eliminada correctamente`);  //Devuelve un mensaje indicando que la localización se ha eliminado correctamente
    } 
    catch (error) {   //En caso de error, devuelve el error
        res.status(500).send(error.message);
    }
};

export default deleteLocation;  //Exporto la función deleteLocation