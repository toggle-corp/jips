import React, {useState, useMemo } from 'react';
import {
    Table,
    //TableColumn,
    //TableHeaderCell,
    //TableHeaderCellProps,
    //useSortState,
    //Pager,
} from '@togglecorp/toggle-ui';
import { createTextColumn } from '../tools/tableHelpers';

import Message from '../tools/Message';
import Container from '../tools/Container/index';

import styles from './styles.module.scss';

const defaultSorting = {
    name: 'created_at',
    direction: 'dsc', 
};

const keySelector = (item: any) => item.key;

interface JipsTableProps {
    className?: string;
}
interface ChartData {
    key: string;
    variables: string;
    households: number;
    individual: number;
    tags: string[];
}

function JipsTable(props: JipsTableProps) {

    //const sortState = useSortState();
    // const { sorting } = sortState;
    const validSorting = defaultSorting;

    const ordering = validSorting.direction === 'asc'
        ? validSorting.name
        : `-${validSorting.name}`;

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const totalDataCount = 10;
    const chartData: ChartData[] = [
        {
            key: '1',
            variables: 'IDPS in capms',
            households: 431,
            individual: 2500,
            tags: ["camps"],
        },
        {
            key: '2',
            variables: 'IDP returnees',
            households: 399,
            individual: 2448,
            tags: ["returnee"],
        },
        {
            key: '3',
            variables: 'Non-displaced',
            households: 321,
            individual: 1705,
            tags: ["nondisplaced"],
        },
    ];

    const chartColumns = useMemo(
        () => {
            // eslint-disable-next-line max-len
            return [
                createTextColumn<ChartData, string>(
                    'key',
                    'Key',
                    (item: any) => item.key,
                ),
                createTextColumn<ChartData, undefined>(
                    'variables',
                    'Variables',
                    (item: any) => item.variables,
                ),
                createTextColumn<ChartData, undefined>(
                    'house_holds',
                    'House Holds',
                    (item: any) => item.households,
                ),
                createTextColumn<ChartData, undefined>(
                    'individual',
                    'Individual',
                    (item: any) => item.individual,
                ),
                createTextColumn<ChartData, undefined>(
                    'tags',
                    'Tags',
                    (item: any) => item.tags,
                ),
            ];
        },
        [],
    );

    return (
        <Container
            heading="Chart Data"
            contentClassName={styles.content}
            className={styles.container}
            //footerContent={(
            //    <Pager
            //        activePage={page}
            //        itemsCount={totalDataCount}
            //        maxItemsPerPage={pageSize}
            //        onActivePageChange={setPage}
            //        onItemsPerPageChange={setPageSize}
            //    />
            //)}
        >
            {totalDataCount > 0 && (
                //<SortContext.Provider value={sortState}>
                //</SortContext.Provider>
                    <Table
                        className={styles.table}
                        data={chartData}
                        keySelector={keySelector}
                        columns={chartColumns}
                    />
            )}
            {totalDataCount <= 0 && (
                <Message
                    message="No actors found."
                />
            )}
        </Container>
    );
}

export default JipsTable;