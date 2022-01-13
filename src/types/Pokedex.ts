import { Pokemon } from "./Pokemon";

export type Pokedex = {
  id: number;
  name: string;
  region: Region;
  entries: Entry[];
};

export type Region = {
  id: number;
  name: string;
  subregions: Subregion[];
};

export type Subregion = {
  id: number;
  name: string;
};

export type Entry = {
  id: number;
  subregionID: number;
  pokemon: Pokemon;
};