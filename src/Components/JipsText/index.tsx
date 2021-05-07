import React from 'react';
import { LanguageContext } from '../../Context';
import { Language } from '../../types';

import styles from './styles.module.scss';

interface JipsTextProps {
    icon?:any,
    title?: string,
    data:string,
}

export default function JipsText(props:JipsTextProps) {
    const {icon, title, data } = props;
    const [text, setText] = React.useState("");

    const language = React.useContext(LanguageContext);

    const parseText = () => {
        const paragraphs = text.replace("/\r", "").split("/\n").map((para:string, index:any)=>{
            return <p key={index} className={styles.paragraph}>{para}</p>;
        });
        return paragraphs;
    };

    React.useEffect(()=>{
        setText(data);
    }, [data])

    return (
        <div className={styles.text}>
            {title && language == Language.en &&<div className={styles.heading}>{icon} {title}</div>}
            {title && language == Language.ar &&<div className={styles.heading}>{title} {icon}</div>}
            {parseText()}
        </div>
    );
}