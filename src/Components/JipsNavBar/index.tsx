import React from 'react';
import styles from './styles.module.scss';
import { FAOIcon, UnicefIcon, UNHCRIcon, UNHabitIcon, UNDPIcon, IOMIcon } from '../../icons';
import PBFLogo from '../JipsNavBar/PBF.jpg';
import FAOLogo from '../JipsNavBar/FAO.jpg';
import IOMLogo from '../JipsNavBar/IOM.jpg';

interface JipsNavBarProps {
    title: string,
    subTitle: string,
}

export default function JipsNavBar(props: JipsNavBarProps) {
    const { title, subTitle } = props;
    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.title} >{title}</div>
                    <div className={styles.subtitle}>{subTitle}</div>
                </div>
                <div className={styles.logo}>
                    <img
                        height={66}
                        width={80}
                        src={PBFLogo} />
                    <UNHCRIcon
                        height={65}
                        width={105}
                    />
                    <UNHabitIcon
                        height={65}
                        width={105}
                    />
                    <UnicefIcon
                        height={65}
                        width={85}
                    />
                    <img
                        height={65}
                        width={85}
                        src={IOMLogo} />
                    <UNDPIcon
                        height={65}
                        width={60}
                    />
                    <img
                        height={65}
                        width={85}
                        src={FAOLogo} />
                </div>
            </div>
        </nav>
    )
}
