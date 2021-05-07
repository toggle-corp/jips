import React from 'react';
import CellBar from './CellBar';
import { Col, Table } from './Table';
import {colors, bgColors} from '../../utils/colorUtil';

import styles from './styles.module.scss';
import { Avatar } from '@togglecorp/toggle-ui';
interface JipsTableBarProps {
    title?: string,
    icon?: any,
    columns: any[],
    data: any[],
}

export default function JipsTableBar(props: JipsTableBarProps) {

    const { title, icon, columns, data } = props;
    
    return (
        <div className={styles.tablebar}>
            {title && <div className={styles.heading}>{icon} {title}</div>}
            {columns &&<Table rows={data} columns={columns} />}
        </div>
    );
}