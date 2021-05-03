import React from 'react';
import styles from './styles.module.scss';

interface JipsFooterProps {
    title: string,
    subTitle:string,
}

export default function JipsFooter(props: JipsFooterProps) {
    const { title,subTitle } = props;
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.subtitle}>
                    {subTitle}
                </div>
            </div>
        </div>
    )
}