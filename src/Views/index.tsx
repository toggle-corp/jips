import React, {useState} from 'react';
import Home from './Home';
import Dashboard from './Dashboard';
import { LanguageContext } from '../Context';
import { Language, Doc } from '../types';
import { DataContext } from '../Context/DataContext';

export default function IndexPage() {
    const [language, setLanguage] = useState<Language>(Language.en);
    const [docNodes, setDocNodes] = React.useState<Doc>({
        header:"",
        footer:"",
        background:"",
        sections:[],
    });
    const [isHome, setIsHome] = React.useState<boolean>(true);

    const handleDataLoad = (doc:Doc) =>{
        setDocNodes(doc);
        setIsHome(!isHome);
    }

    return(
        <LanguageContext.Provider value={language}>
            <DataContext.Provider value={docNodes}>
                {isHome && <Home setLang={setLanguage} setData={handleDataLoad} />}
                {!isHome && <Dashboard />}
            </DataContext.Provider>
        </LanguageContext.Provider>
    );
}

export {Home, Dashboard,}
