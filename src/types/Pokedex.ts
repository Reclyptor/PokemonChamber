import { Pokemon } from "./Pokemon";

export interface Pokedex {
  id: number;
  name: string;
  region: Region;
  entries: Entry[];
}

export interface Region {
  id: number;
  name: string;
  subregions: Subregion[];
}

export interface Subregion {
  id: number;
  name: string;
}

export interface Entry {
  id: number;
  subregionID: number;
  pokemon: Pokemon[];
}