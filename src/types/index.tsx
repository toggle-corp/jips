export type Dimension = {
    height: number,
    width: number,
}

export enum Language { en = "ENG", ar = "ARA" };

export interface KeyValues {
    keys: string[],
    values: any[],
}

export interface Values {
    variable: string,
    data: KeyValues,
}

export interface SubSection {
    subHeading?: string,
    vars: Values[]
}

export interface Section {
    heading: string,
    body: SubSection[];
}

export interface Doc {
    header: string,
    footer: string,
    background: string;
    sections: Section[],
}
