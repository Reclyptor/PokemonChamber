export type Pokedex = Pokemon[]

export interface Pokemon {
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
}

export interface Types {
    primary:   string;
    secondary: string;
}

export interface Physique {
    height: number;
    weight: number;
}

export interface Abilities {
    primary:   string;
    secondary: string;
    hidden:    string;
}

export interface Statistics {
    hp:             number;
    attack:         number;
    defense:        number;
    specialAttack:  number;
    specialDefense: number;
}

export interface Training {
    catchRate:  number;
    growthRate: string;
}

export interface Image {
    image: string;
    src:   string;
}