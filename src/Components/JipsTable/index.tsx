import React, { useMemo } from 'react';
import { Table, TableColumn, createNumberColumn } from '@togglecorp/toggle-ui';
import Message from './tools/Message';
import Container from './tools/Container/index';
import styles from './styles.module.scss';
import { IDPsInCamps, IDPsReturnees, NonDisplaced } from '../../icons';

interface JipsTableProps {
    title?: string,
    rows?: any,
    columns: TableColumn<any, string, any, any>[],
}

interface RowsCheck {
    key: number | undefined,
    variable: string | undefined,
    individuals: number | undefined,
    households: number | undefined,
}

function JipsTable(props: JipsTableProps) {

    const { title, rows, columns } = props;
    const totalDataCount = rows.length;

    //const rowData:RowsCheck = [
    // {
    //    households: 600,
    //    individuals: 250,
    //    key: 0,​
    //    variable: "IDPs in camps",
    // },
    // {
    //    households: 700,
    //    individuals: 2900,
    //    key: 0,​
    //    variable: "IDPs in camps",
    // }
    //];

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
                    keySelector={(item: any) => item.key}
                    columns={columns}
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
