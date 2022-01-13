export type Type = "Grass" | "Fire" | "Water" | "Bug" | "Normal" | "Dark" | "Poison" | "Electric" | "Ground" | "Ice" | "Fairy" | "Steel" | "Fighting" | "Psychic" | "Rock" | "Ghost" | "Dragon" | "Flying";

export type Pokemon = {
    id:         number;
    generation: number;
    isDefault:  boolean;
    name:       string;
    species:    string;
    variant:    string;
    status:     string;
    shape:      string;
    types:      Types;
    physique:   Physique;
    abilities:  Abilities;
    statistics: Statistics;
    training:   Training;
    images:     Image[];
};

export type Types = {
    primary:   string;
    secondary: string;
};

export type Physique = {
    height: number;
    weight: number;
};

export type Abilities = {
    primary:   string;
    secondary: string;
    hidden:    string;
};

export type Statistics = {
    hp:             number;
    attack:         number;
    defense:        number;
    specialAttack:  number;
    specialDefense: number;
    speed:          number;
    total:          number;
};

export type Training = {
    catchRate:  number;
    growthRate: string;
};

export type Image = {
    image: string;
    src:   string;
};