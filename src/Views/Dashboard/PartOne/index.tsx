import React from 'react';
import { JipsBarChart, JipsStackedBarChart, JipsTable } from '../../../Components';
import JipsText from '../../../Components/JipsText';
import { Dimension } from '../../../types';
import SideBar from '../SideBar';
import styles from './styles.module.scss';
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function PartOne() {
    const [dimension, setDimension] = React.useState<Dimension>({ height: 0, width: 0 });

    React.useEffect(() => {
        const width = window.screen.availWidth - 20;
        const height = window.screen.availHeight - 100;
        setDimension({ height: height, width: width });
    }, [window]);

    return (
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.sideBar}>
                    <SideBar title="Chart one">
                        <JipsText
                            title={"Background"}
                            data={"UN PeaceBuilding"} />
                            <JipsTable></JipsTable>
                            <h2>This is Basic demoraphics of the samples component</h2>
                    </SideBar>
                </div>
            </div>
            <div className={styles.middleBar}>
            <h3>This is Access to agriculture land component <IoIosArrowDropdownCircle /></h3>

                <JipsBarChart height={dimension.height / 3} width={dimension.width / 3} />
                </div>
                <div className={styles.endBar}>
                <h3>This is livelihoods</h3>
                <JipsStackedBarChart height={dimension.height / 3} width={dimension.width / 3} />
                </div>
        </div>
    );

}