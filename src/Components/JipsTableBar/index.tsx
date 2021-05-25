import React from 'react';
import { Table } from './Table';

import styles from './styles.module.scss';
import { LanguageContext } from '../../Context';
import { Language } from '../../types';

interface JipsTableBarProps {
    title?: string,
    icon?: any,
    columns: any[],
    data: any[],
}

function JipsTableBar(props: JipsTableBarProps) {
    const { title, icon, columns, data } = props;
    const language = React.useContext(LanguageContext);
    return (
        <div className={styles.tablebar}>
            { title && language === Language.en && (
                <div className={styles.heading}>
                {icon} {title}
                </div>
            )}
            { title && language === Language.ar && (
                <div className={styles.heading} style={{textAlign:"right"}}>
                {title} {icon}
                </div>
            )}
            {columns &&<Table rows={data} columns={columns} />}
        </div>
    );
}

export default React.memo(JipsTableBar);
