import React, { useEffect } from 'react';
import styles from './styles.module.scss';

export interface Col {
    key: string,
    name: string,
    icon?: any,
    render: (item: any) => void,
    tags?: any[],
}

interface TableProps {
    title?: string,
    columns: Col[],
    rows: any[]
}

export function Table(props: TableProps) {
    const { title, columns, rows } = props;

    const [data, setData] = React.useState<TableProps>({ columns: [], rows: [] });

    useEffect(()=>{
        setData({rows:rows, columns:columns, title:title})
    },[columns, rows, title])

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {data.columns.map((column, index) => {
                        const { name, icon } = column;

                        const child = (
                            <div style={{ display: "flex", flexDirection: "column" }}>{icon} {name}</div>
                        );
                        return (
                            <th
                                key={index}
                                scope="col"
                                className={styles.head}
                            >
                                {child}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {data.rows.map((datum, index) => {
                    return (
                        <tr
                            key={index}
                        >
                            {columns.map((column, index) => {
                                const { key, render } = column;
                                return (
                                    <td
                                        key={key}
                                        className={(index === 0) ? styles.vars : styles.bars}
                                    >
                                        {(render) ? render(datum) : datum[key]}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}