import React from 'react';
import styles from './styles.module.scss';
import { FAOIcon,  UnicefIcon, UNHCRIcon, UNHabitIcon, UNDPIcon, IOMIcon } from '../../icons';

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
                    <UnicefIcon
                    height={65}
                    width={65}
                    />
                    <UNHCRIcon
                    height={65}
                    width={65}
                    />
                    <UNHabitIcon
                    height={65}
                    width={65}
                    />
                    <UNDPIcon
                    height={65}
                    width={65}
                    />
                    <IOMIcon
                    height={65}
                    width={65}/>
                    <FAOIcon
                    height={70}
                    width={70}
                    />
                </div>
            </div>
        </nav>
    )
}
