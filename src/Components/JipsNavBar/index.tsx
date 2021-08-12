import React from 'react';
import styles from './styles.module.scss';
import { FAOIcon, UnicefIcon, UNHCRIcon, UNHabitIcon, UNDPIcon, IOMIcon } from '../../icons';
import PBFLogo from '../JipsNavBar/PBF.jpg';

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
                    <FAOIcon
                        height={70}
                        width={150}
                    />
                    <UNDPIcon
                        height={65}
                        width={40}
                    />
                    <IOMIcon
                        height={75}
                        width={180} />
                    <UnicefIcon
                        height={62}
                        width={115}
                    />
                    <UNHabitIcon
                        height={65}
                        width={115}
                    />
                    <UNHCRIcon
                        height={68}
                        width={115}
                    />
                    <img
                        height={68}
                        width={85}
                        src={PBFLogo} />
                </div>
            </div>
        </nav>
    )
}
