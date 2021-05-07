import React from 'react';
import { LangContext, Language } from '../../../Context';
import styles from './styles.module.scss';

interface MainContentProps{
    title: string,
    icon?: React.Component,
}

const MainContent:React.FC<MainContentProps> = (props) => {

    const {title, icon} = props;
    const lang = React.useContext(LangContext);

    return(
        <div className={styles.MainContent}>
            <h2 className={(lang.language == Language.ar) ? styles.rtl : styles.ltr}>{icon} {title} </h2>
            {props.children}
        </div>
    );
}

export default MainContent;