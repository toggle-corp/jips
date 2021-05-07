import React from 'react';
import { LanguageContext } from '../../../Context';
import { Language } from '../../../types';

import styles from './styles.module.scss';

interface SideBarProps{
    title?: string,
    icon?: React.Component,
    className?: string,
}

const SideBar:React.FC<SideBarProps> = (props) => {

    const {title, icon, className} = props;
    const lang = React.useContext(LanguageContext);

    return(
        <div className={styles.sidebar + " " + className}>
           { title && <h2 className={(lang === Language.ar) ? styles.rtl : styles.ltr}>{icon} {title}  </h2>}
            {props.children}
        </div>
    );
}

export default SideBar;