import React, { ReactNode } from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.scss';

export interface TextProps {
    className?: string;
    value: string | undefined | null;
    icon?: ReactNode;
    tooltip?: string | undefined | null;
}

function Text(props: TextProps) {
    const {
        className,
        value,
        tooltip,
        icon,
    } = props;

    return (
        <div
            className={_cs(styles.iconText, className)}
            title={tooltip ?? value ?? ''}
        >
            <div>
            {icon && (
                <span className={styles.icon}>{icon}</span>
            )}
            </div>
            <div>
            <span className={styles.text}>{value}</span>
            </div>
        </div>
    );
}

export default Text;
