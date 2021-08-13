import React from 'react';
import { LanguageContext } from '../../Context';
import { Language } from '../../types';
import image from './jips.png';
import styles from './styles.module.scss';

interface JipsFooterProps {
    title: string,
    subTitle:string,
}

function JipsFooter(props: JipsFooterProps) {
    const { title,subTitle } = props;

    const lang = React.useContext(LanguageContext);

    return (
        <div className={styles.footer}>
            {lang === Language.en && (
                <div className={styles.container}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.subtitle}>
                        {subTitle}
                    </div>
                    <img src={image} className={styles.logo} alt="JIPS Logo" />
                </div>
            )}
            {lang === Language.ar && (
                <div className={styles.container}>
                    <img src={image} className={styles.logoArb} alt="JIPS Logo" />
                    <div className={styles.subtitleArb}>
                        {subTitle}
                    </div>
                    <div className={styles.title}>
                        {title}
                    </div>
                </div>
            )}
        </div>
    )
}

export default React.memo(JipsFooter);
