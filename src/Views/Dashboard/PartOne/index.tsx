import React from 'react';
import { JipsBarChart, JipsStackedBarChart, JipsTable, JipsTableBar, JipsTitle } from '../../../Components';
import JipsText from '../../../Components/JipsText';
import { Dimension, Section, SubSection } from '../../../types';
import SideBar from '../SideBar';
import { _cs } from '@togglecorp/fujs';
import { Doc } from '../../../types';

import { FaSearchengin } from "react-icons/fa";
import { GiTakeMyMoney, GiGrain } from "react-icons/gi";
import { AiFillFile, AiFillSafetyCertificate } from "react-icons/ai";

import styles from './styles.module.scss';
import { getActivityData, getGenderActivityData, getBarChartData, getTableBarData, getTableData, tableData } from '../../../utils/dataUtil';
import { DataContext } from '../../../Context/DataContext';
import { IDPsInCamps, IDPsReturnees, NonDisplaced } from '../../../icons';

export default function PartOne() {

    const [dimension, setDimension] = React.useState<Dimension>({ height: 0, width: 0 });

    const [scopeData, setScopeData] = React.useState<tableData>({ columns: [], rows: [] });
    const [sections, setSections] = React.useState<Section[]>([]);

    const data: Doc = React.useContext(DataContext);

    React.useEffect(() => {
        const width = window.screen.availWidth - 20;
        const height = window.screen.availHeight - 100;

        const filteredSections = data.sections.filter((section) => section.heading && section.heading !== "")
        const tableInfo: tableData = getTableData(filteredSections[0].body[0]);

        setDimension({ height: height, width: width });
        setScopeData(tableInfo);
        setSections(filteredSections);
    }, [data]);

    const displaySectionTwo = ()=>{
        if(sections.length > 1){
            var rowCols;
            var cahrtData = [];
            const filteredSubSecs = sections[1].body.filter((subsec: SubSection) => subsec.vars.length > 0);
            rowCols = (filteredSubSecs.length > 0) ? getTableBarData(filteredSubSecs[0]) : { columns: [], rows: [] };
            cahrtData = (filteredSubSecs.length > 1) ? getBarChartData({ subsec: filteredSubSecs[1] }) : [];

            return (
                <div className={_cs(styles.row)}>
                    <div className={styles.w60}>
                        {filteredSubSecs.length > 0 && (
                            <JipsTableBar columns={rowCols.columns} data={rowCols.rows} title={filteredSubSecs[0].subHeading} />
                        )}
                    </div>
                    <div className={_cs(styles.w40, styles.bl)}>
                        {filteredSubSecs.length > 1 && (
                            <JipsBarChart data={cahrtData} height={220} width={dimension.width / 3 * 0.85} title={filteredSubSecs[1].subHeading} />
                        )}
                    </div>
                </div>
            );
        }
        return "No data available!"
    }

    const displaySectionThree = () => {
        if (sections.length >= 3) {
            const filteredSubSecs = sections[2].body.filter((subsec: SubSection) => subsec.vars.length > 0);
            const disp = filteredSubSecs.map((subsec: SubSection) => {
                const colRows = getTableBarData(subsec);
                return <JipsTableBar columns={colRows.columns} data={colRows.rows} title={subsec.subHeading} />
            });
            return disp;
        }
        return "No data available!"
    }

    const displaySectionFour = () => {
        if (sections.length >= 4) {
            const filteredSubSecs = sections[3].body.filter((subsec: SubSection) => subsec.vars.length > 0);

            const houseData = (filteredSubSecs.length > 0) ? getTableBarData(filteredSubSecs[0]) : { columns: [], rows: [] };
            const houseTitle = (filteredSubSecs.length > 0) ? filteredSubSecs[0].subHeading : "";

            const activities = filteredSubSecs.length > 1 ? getActivityData(filteredSubSecs[1]) : [];
            const actheading = filteredSubSecs.length > 1 ? filteredSubSecs[1].subHeading : "";

            const idpsInCampsMainActivity = getGenderActivityData(activities, 'IDPs in camps');
            const idpsReturneesMainActivity = getGenderActivityData(activities, 'IDP returnees');
            const nonDisplacedMainActivity = getGenderActivityData(activities, 'Non-displaced');
            const damrahResidents = getGenderActivityData(activities, 'Damrah residents');

            const barChart = (filteredSubSecs.length > 2) ? getBarChartData({ subsec: filteredSubSecs[2] }) : [];
            const barchartTitle = (filteredSubSecs.length > 2) ? filteredSubSecs[2].subHeading : "";
            return (
                <>
                    <JipsTableBar columns={houseData.columns} data={houseData.rows} title={houseTitle} />
                    <table>
                        <tr>
                            <td colSpan={2}>
                                <div className={styles.heading}>
                                    {actheading}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <IDPsInCamps />
                                    <p style={{ fontSize: "12px" }}>IDPs in camps</p>
                                </div>
                            </td>
                            <td>
                                <JipsStackedBarChart
                                    height={100}
                                    width={dimension.width / 3 * 0.85}
                                    data={idpsInCampsMainActivity}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <IDPsReturnees />
                                    <p style={{ fontSize: "12px" }}>IDPs Returnees</p>
                                </div>
                            </td>
                            <td>
                                <JipsStackedBarChart
                                    height={100}
                                    width={dimension.width / 3 * 0.85}
                                    data={idpsReturneesMainActivity}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: dimension.width / 3 * 0.2 }}>
                                <div>
                                    <NonDisplaced />
                                    <p style={{ fontSize: "12px" }}>Non-displaced</p>
                                </div>
                            </td>
                            <td>
                                <JipsStackedBarChart
                                    height={100}
                                    width={dimension.width / 3 * 0.85}
                                    data={nonDisplacedMainActivity}
                                />
                            </td>
                        </tr>

                        {damrahResidents.length > 0 && <tr>
                            <td style={{ width: dimension.width / 3 * 0.2 }}>
                                <div>
                                    <p style={{ fontSize: "12px" }}>Damrah residents</p>
                                </div>
                            </td>
                            <td>
                                <JipsStackedBarChart
                                    height={100}
                                    width={dimension.width / 3 * 0.85}
                                    data={damrahResidents}
                                />
                            </td>
                        </tr>}

                    </table>
                    <div className={""}>
                        <JipsBarChart data={barChart} title={barchartTitle} height={150} width={500} />
                    </div>
                </>
            );
        }
        return "No data available!"
    }

    return (
        <div className={_cs(styles.row, styles.mt5)}>
            <div className={styles.w67}>

                <div className={_cs(styles.row, styles.bb)}>
                    <div className={_cs(styles.col, styles.w50, styles.p5, styles.br)}>
                        <JipsTitle title="Background" icon={<AiFillFile />} />
                        <div className={_cs(styles.row, styles.bb, styles.mt10)}>
                            <JipsText data={data.background} />
                        </div>
                        <div className={_cs(styles.row, styles.pt10)}>
                            <div className={styles.col}>
                                <JipsTitle title={data.sections[0].heading} icon={<FaSearchengin />} />
                                <div className={_cs(styles.row, styles.pt10)}>
                                    <JipsTable columns={scopeData.columns} rows={scopeData.rows} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {sections.length > 2 && (
                        <div className={_cs(styles.col, styles.w50, styles.p5, styles.bl)} >
                            <JipsTitle title={sections[2].heading} icon={<GiGrain />} />
                            { displaySectionThree()}
                        </div>
                    )}
                </div>

                <div className={_cs(styles.row, styles.pt10)}>
                    <div className="col">
                        {sections.length > 1 && (
                            <>
                                <JipsTitle title={sections[1].heading} icon={<AiFillSafetyCertificate />} />
                                {displaySectionTwo()}
                            </>
                        )}
                    </div>
                </div>

            </div>

            <SideBar className={_cs(styles.bl, styles.p5)}>
                {sections.length >= 4 && (
                    <>
                        <JipsTitle title={sections[3].heading} icon={<GiTakeMyMoney />} />
                        <div className={_cs(styles.bb)}>
                            {displaySectionFour()}
                        </div>
                    </>
                )}
            </SideBar>
        </div>
    );

}
