# Práctica 3 - Jesús Cuesta Bartolomé

## Funciones

El programa consta de los siguientes endpoints:

1. `.get("/allcharacters/:pageNumber")` Este endpoint devuelve todos los personajes de la API de manera paginada. El parámetro pageNumber indica el número de página que se quiere obtener. Hay 42 paginas en total.

2. `.get("/character/:id")` Este endpoint devuelve el personaje con el id indicado. Este personaje se guarda en la memoria local dentro del array `characters`.

3. `.get("/alllocations/:pageNumber")` Este endpoint devuelve todas las localizaciones de la API de manera paginada. El parámetro pageNumber indica el número de página que se quiere obtener. Hay 7 paginas en total.

4. `.get("/location/:id")` Este endpoint devuelve la localización con el id indicado. Esta localización se guarda en la memoria local dentro del array `locations`.

5. * `.get("/filtercharacter/status/:status)` Devuelve todos los personajes que tengan el status indicado. Los status posibles son: `alive`, `dead` y `unknown`.

    * `.get("/filtercharacter/gender/:gender)` Devuelve todos los personajes que tengan el gender indicado. Los géneros posibles son `male`, `female`, `genderless` y `uknown`.

    * `.get("/filterlocation/type/:type/dimension/:dimension")` Devuelve todos los personajes que cumplan con ambos filtros. 

6. * `.get("/filterlocation/type/:type)` Devuelve todas las localizaciones que tengan el type indicado.
    
    * `.get("/filterlocation/dimension/:dimension)` Devuelve todas las localizaciones que tengan la dimension indicada.

    * `.get("/filterlocation/type/:type/dimension/:dimension")` Devuelve todas las localizaciones que cumplan con ambos filtros.

7. `.delete("/deletecharacter/:id")` Elimina el personaje con el id indicado del array `characters`.

8. `.delete("/deletelocation/:id")` Elimina la localización con el id indicado del array `locations`.

Adicionalmente se han añadido los siguientes endpoints para ver el contenido de los arrays `characters` y `locations`:

* `.get("/arraycharacters")` Devuelve el contenido del array `characters` y además muestra por terminal los atributos de los filtros que hay.
* `.get("/arraylocations")` Devuelve el contenido del array `locations` y además muestra por terminal los atributos de los filtros que hay.