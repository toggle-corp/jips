import React from 'react';
import { Table, TableColumn } from '@togglecorp/toggle-ui';
import Message from './tools/Message';
import Container from './tools/Container/index';
import returnee from '../../icons/returnee.svg';
import styles from './styles.module.scss';

interface JipsTableProps {
    title?: string,
    rows:any[],
    columns: TableColumn<any, string, any, any>[],
}

function JipsTable(props: JipsTableProps) {

    const {title, rows, columns} = props;
    const totalDataCount = rows.length;

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
