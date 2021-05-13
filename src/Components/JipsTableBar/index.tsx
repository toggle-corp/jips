import React from 'react';
import { Table } from './Table';

import styles from './styles.module.scss';

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
            {columns && <Table rows={data} columns={columns} />}
        </div>
    );
}