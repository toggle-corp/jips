import React from 'react';
import { LangContext, Language } from '../../../Context';
import styles from './styles.module.scss';

interface SideBarProps{
    title: string,
    icon?: React.Component,
}

const SideBar:React.FC<SideBarProps> = (props) => {

    const {title, icon} = props;
    const lang = React.useContext(LangContext);

    return(
        <div className={styles.sidebar}>
            <h2 className={(lang.language == Language.ar) ? styles.rtl : styles.ltr}>{icon} {title} </h2>
            {props.children}
        </div>
    );
}

export default SideBar;