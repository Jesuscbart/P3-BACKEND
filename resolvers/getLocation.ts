import { Request, Response } from "npm:express@4.18.2";
import { Location } from "../types.ts";

const getLocation = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response = await fetch(
            `https://rickandmortyapi.com/api/location/${id}`    //Aquí le paso el id que me llega por parámetro (1-126)
        );
        if (response.status !== 200) {
            res.status(response.status).send(response.statusText);
            return;
        }

        const location: Location = await response.json();

        //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
        const date = new Date(location.created);   //Creo una fecha con el string que nos da la API
        const spanishDate = date.toLocaleDateString("es-ES");  //La paso a formato español con la función toLocaleDateString

        res.send({
            id: location.id,
            name: location.name,
            type: location.type,
            dimension: location.dimension,
            created: spanishDate       
        });
    } catch (error) {
        res.status(404).send(error.message);
        return;
    }
};

export default getLocation;
