import React from 'react';
import { Doc } from "../types";

export const DataContext = React.createContext<Doc>({header:"", footer:"", background:"", sections:[]});
