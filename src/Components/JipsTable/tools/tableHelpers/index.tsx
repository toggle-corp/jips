import { ReactNode } from 'react';
import { compareString } from '@togglecorp/fujs';
import {
    TableHeaderCell,
    TableHeaderCellProps,
    TableColumn,
    TableSortDirection,
    TableFilterType,
} from '@togglecorp/toggle-ui';

//import { RouteData, Attrs } from '#hooks/useRouteMatching';
import Text, { TextProps } from './Text';

export function createTextColumn<D, K>(
    id: string,
    title: string,
    accessor: (item: D) => string | undefined | null,
    iconAccessor?: (item: D) => ReactNode,
    options?: {
        cellAsHeader?: boolean,
        sortable?: boolean,
        defaultSortDirection?: TableSortDirection,
        filterType?: TableFilterType,
        orderable?: boolean;
        hideable?: boolean;
    },
) {
    const item: TableColumn<D, K, TextProps, TableHeaderCellProps> & {
        valueSelector: (item: D) => string | undefined | null,
        valueComparator: (foo: D, bar: D) => number,
    } = {
        id,
        title,
        cellAsHeader: options?.cellAsHeader,
        headerCellRenderer: TableHeaderCell,
        headerCellRendererParams: {
            sortable: options?.sortable,
            filterType: options?.filterType,
            //orderable: options?.orderable,
            hideable: options?.hideable,
        },
        cellRenderer: Text,
        cellRendererParams: (_: K, datum: D): TextProps => ({
            value: accessor(datum),
            icon: iconAccessor && iconAccessor(datum),
        }),
        valueSelector: accessor,
        valueComparator: (foo: D, bar: D) => compareString(accessor(foo), accessor(bar)),
    };
    return item;
}