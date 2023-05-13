import { Character } from '../Types/characterType';

declare function formatData(character: Character): Character;
declare function formatHeight(character: Character): string;
declare function formatWeight(character: Character): string | number;

export { formatData, formatHeight, formatWeight };
