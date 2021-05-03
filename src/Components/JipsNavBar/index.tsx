import React from 'react';
import styles from './styles.module.scss';
import image from './jips.png';

interface JipsNavBarProps {
    title: string,
    subTitle: string,
}

export default function JipsNavBar(props: JipsNavBarProps) {
    const { title, subTitle } = props;
    return (
        <nav>
            <div className={styles.container}>
                <img src={image} className={styles.logo} alt="JIPS Logo" />
                <div className={styles.wrapper}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subtitle}>{subTitle}</div>
                </div>
            </div>
        </nav>
    )
}