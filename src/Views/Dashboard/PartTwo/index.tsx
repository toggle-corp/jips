import React from 'react';
import { JipsBarChart, JipsStackedBarChart } from '../../../Components';
import styles from './styles.module.scss';

export default function PartTwo() {
    return (
        <>
            <h1>This is part two</h1>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <JipsBarChart height={200} width={300} />
                        </div>
                        <div className={styles.col}>
                            <JipsBarChart height={200} width={300} />
                        </div>
                        <div className={styles.col3}>
                            <JipsBarChart height={200} width={300} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}