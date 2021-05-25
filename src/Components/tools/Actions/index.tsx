import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.scss';

interface Props {
    className?: string;
    children?: React.ReactNode;
}

function Actions(props: Props) {
    const {
        className,
        children,
    } = props;

    return (
        <div className={_cs(className, styles.actions)}>
            { children }
        </div>
    );
}

export default React.memo(Actions);
