import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.scss';

interface MessageProps {
    className?: string;
    message: string;
}

function Message(props: MessageProps) {
    const {
        className,
        message = 'No data found',
    } = props;

    return (
        <div className={_cs(className, styles.container)}>
            <div className={styles.message}>
                {message}
            </div>
        </div>
    );
}
export default Message;
