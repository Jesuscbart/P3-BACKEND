import { Character } from "./types.ts";
    
   
interface CharacterResponse {
    results: Character[];
  }
  
  async function getCharacter(page: number): Promise<CharacterResponse> {

    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

    const data = await response.json();

    return data;
  }

  export default getCharacter;