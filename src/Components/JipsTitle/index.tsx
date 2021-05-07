import React from 'react';
import {_cs} from '@togglecorp/fujs';

import styles from './styles.module.scss';
import { LanguageContext } from '../../Context';
import { Language } from '../../types';

interface TitleProps {
    title:string,
    icon?:any,
    className?:string,
}
export default function JipsTitle(props:TitleProps) {
    const {title, icon, className} = props;
    const language = React.useContext(LanguageContext);

    return(
        <div className={_cs(styles.title, className)}>
            {language === Language.en &&<>{icon} {title}</>}
            {language === Language.ar &&<>{title} {icon}</>}
        </div>
    );
}