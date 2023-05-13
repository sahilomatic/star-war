import { Dispatch, SetStateAction } from 'react';

interface KnownCharacters{
    name : string;
    gender: string;
    homePlanet : string;
    hair_color: string;
    eye_color : string;
    films: string[];


}

export interface Character extends KnownCharacters{
    [key: string]: any;
}
export type CharacterPropType = {
    characters: Character[];
    
    setSelectedChar : Dispatch<SetStateAction<Character | undefined>>;

}

export type SelectedCharProp = {
    selectedChar : Character;
    setSelectedChar : Dispatch<SetStateAction<Character | undefined>>;
}



export type cacheDataType = {

    pageNumber : number;
    components: Character[];

}