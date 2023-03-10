export enum MacroFoodCategory {
    Protein,
    Carb,
    Fat,
    Veggies
}

export enum WhatToEatSection {
    More,
    Some,
    Less
}

export interface Country {
    iso: string;
    name: string;
    phoneCode: string;
}

export interface SelectorItem {
    id: number;
    image: string;
    title: string;
    description: string;
    navigateTo?: string;
}

export interface ActivityLevel extends SelectorItem {
    factor: number;
}

export interface WhatToEat {
    category: MacroFoodCategory;
    section: WhatToEatSection;
    name: string;
    image: string;
}