import React from 'react';

export enum Language {en = "ENG", ar = "ARA"};
export class Lang {
    static language : Language = Language.en;
}
export const LangContext= React.createContext(Lang);
