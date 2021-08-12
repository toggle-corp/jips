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
                        width={180}
                    />
                    <UNDPIcon
                        height={65}
                        width={65}
                    />
                    <IOMIcon
                        height={75}
                        width={190} />
                    <UnicefIcon
                        height={62}
                        width={95}
                    />
                    <UNHabitIcon
                        height={65}
                        width={95}
                    />
                    <UNHCRIcon
                        height={68}
                        width={95}
                    />
                    <img
                        height={68}
                        width={75}
                        src={PBFLogo} />
                </div>
            </div>
        </nav>
    )
}
