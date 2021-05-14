import React from 'react';
import { Table, TableColumn } from '@togglecorp/toggle-ui';
import Message from './tools/Message';
import Container from './tools/Container/index';
import styles from './styles.module.scss';
import { LanguageContext } from '../../Context';
import { Language } from '../../types';

interface JipsTableProps {
    title?: string,
    rows:any[],
    columns: TableColumn<any, string, any, any>[],
}

function JipsTable(props: JipsTableProps) {

    const {title, rows, columns} = props;
    const totalDataCount = rows.length;

    const lang = React.useContext(LanguageContext);

    const [cols, setCols] = React.useState<TableColumn<any, string, any, any>[]>([]);

    React.useEffect(()=>{
        const headings = (lang === Language.ar)?columns.reverse() : columns;
        setCols(headings);
    }, [columns, lang]);

    return (
        <Container
            heading={title}
            contentClassName={styles.content}
            className={styles.container}
        >
            {totalDataCount > 0 && (
                    <Table
                        className={styles.table}
                        data={rows}
                        keySelector={(item:any)=>item.key}
                        columns={cols}
                    />
            )}
            {totalDataCount <= 0 && (
                <Message
                    message="No data"
                />
            )}
        </Container>
    );
}

export default JipsTable;
