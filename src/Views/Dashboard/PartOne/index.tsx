import React from 'react';
import { JipsBarChart, JipsStackedBarChart, JipsTable, JipsTableBar, JipsTitle } from '../../../Components';
import JipsText from '../../../Components/JipsText';
import { Dimension, Language, Section, SubSection } from '../../../types';
import SideBar from '../SideBar';
import { _cs } from '@togglecorp/fujs';
import { Doc } from '../../../types';
import { GiTakeMyMoney, GiGrain } from "react-icons/gi";
import styles from './styles.module.scss';
import { getActivityData, getGenderActivityData, getBarChartData, getTableBarData, getTableData, tableData } from '../../../utils/dataUtil';
import { DataContext } from '../../../Context/DataContext';
import { IDPsInCamps, IDPsReturnees, NonDisplaced, Nomade } from '../../../icons';
import { LanguageContext } from '../../../Context';

export default function PartOne() {

    const [dimension, setDimension] = React.useState<Dimension>({ height: 0, width: 0 });

    const [scopeData, setScopeData] = React.useState<tableData>({ columns: [], rows: [] });
    const [sections, setSections] = React.useState<Section[]>([]);

    const data: Doc = React.useContext(DataContext);
    const language = React.useContext(LanguageContext);

    React.useEffect(() => {
        const width = window.screen.availWidth - 20;
        const height = window.screen.availWidth*0.71 - 100;

        const filteredSections = data.sections.filter((section) => section.heading && section.heading !== "")
        const tableInfo: tableData = getTableData(filteredSections[0].body[0]);

        setDimension({ height: height, width: width });
        setScopeData(tableInfo);
        setSections(filteredSections);
    }, [data]);

    const displaySectionTwo = () => {
        if (sections.length > 1) {
            var rowCols;
            var cahrtData = [];
            const filteredSubSecs = sections[1].body.filter((subsec: SubSection) => subsec.vars.length > 0);
            rowCols = (filteredSubSecs.length > 0) ? getTableBarData(filteredSubSecs[0]) : { columns: [], rows: [] };
            cahrtData = (filteredSubSecs.length > 1) ? getBarChartData({ subsec: filteredSubSecs[1] }) : [];

            return (
                <div className={_cs(styles.row, "bg-grey")}>
                    {language === Language.en && (
                        <>
                            <div className={styles.w60}>
                                {filteredSubSecs.length > 0 && (
                                    <JipsTableBar columns={rowCols.columns} data={rowCols.rows} title={filteredSubSecs[0].subHeading} />
                                )}
                            </div>
                            <div className={_cs(styles.w40, styles.bl)}>
                                {filteredSubSecs.length > 1 && (
                                    <JipsBarChart data={cahrtData} height={dimension.height/6} width={dimension.width / 3 * 0.85} title={filteredSubSecs[1].subHeading} />
                                )}
                            </div>
                        </>
                    )}

                    {language === Language.ar && (
                        <>
                            <div className={_cs(styles.w40, styles.br)}>
                                {filteredSubSecs.length > 1 && (
                                    <JipsBarChart data={cahrtData} height={220} width={dimension.width / 3 * 0.85} title={filteredSubSecs[1].subHeading} />
                                )}
                            </div>
                            <div className={styles.w60}>
                                {filteredSubSecs.length > 0 && (
                                    <JipsTableBar columns={rowCols.columns} data={rowCols.rows} title={filteredSubSecs[0].subHeading} />
                                )}
                            </div>
                        </>
                    )}
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
            const allActivities = filteredSubSecs.length > 1 ? getActivityData(filteredSubSecs[1]) : [];
            const actheading = filteredSubSecs.length > 1 ? filteredSubSecs[1].subHeading : "";
            const keys = filteredSubSecs[0].vars[0].data.keys;
            const activitiesCategorical = keys.map((key: string) => {
                return getGenderActivityData(allActivities, key);
            });

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
                        {activitiesCategorical.map((activity, index) => {
                            return (
                                <tr>
                                    {language === Language.en && (
                                        <>
                                            <td>
                                                <div>
                                                    {index === 0 && <IDPsInCamps />}
                                                    {index === 1 && <IDPsReturnees />}
                                                    {index === 2 && <NonDisplaced />}
                                                    {index === 3 && <Nomade />}
                                                    <p style={{ fontSize: "12px" }}>{keys[index]}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <JipsStackedBarChart
                                                    height={(index === activitiesCategorical.length -1)?150:100}
                                                    width={dimension.width / 3 * 0.85}
                                                    data={activity}
                                                    showLegends = {index === activitiesCategorical.length -1}
                                                />
                                            </td>
                                        </>
                                    )}
                                    {language === Language.ar && (
                                        <>
                                            <td>
                                                <JipsStackedBarChart
                                                    height={(index === activitiesCategorical.length -1)?150:100}
                                                    width={dimension.width / 3 * 0.85}
                                                    data={activity}
                                                    showLegends = {index === activitiesCategorical.length -1}
                                                />
                                            </td>
                                            <td>
                                                <div>
                                                    {index === 0 && <IDPsInCamps />}
                                                    {index === 1 && <IDPsReturnees />}
                                                    {index === 2 && <NonDisplaced />}
                                                    {index === 3 && <Nomade />}
                                                    <p style={{ fontSize: "12px" }}>{keys[index]}</p>
                                                </div>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            )
                        })
                        }
                    </table>
                    <div className={""}>
                        <JipsBarChart data={barChart} title={barchartTitle} height={160} width={dimension.width / 3 * 0.9} />
                    </div>
                </>
            );
        }
        return "No data available!"
    }

    return (
        <div className={_cs(styles.row, styles.mt5)}>
            {language === Language.en && (
                <>
                    <div className={styles.w67}>

                        <div className={_cs(styles.row, styles.bb)}>
                            <div className={_cs(styles.col, styles.w50, styles.p5, styles.br)}>
                                <JipsTitle title="Background"/>
                                <div className={_cs(styles.row, styles.bb, styles.mt10, "bg-grey")}>
                                    <JipsText data={data.background} />
                                </div>
                                <div className={_cs(styles.row, styles.pt10)}>
                                    <div className={styles.col}>
                                        <JipsTitle title={data.sections[0].heading} />
                                        <div className={_cs(styles.row, styles.pt10)}>
                                            <JipsTable columns={scopeData.columns} rows={scopeData.rows} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {sections.length > 2 && (
                                <div className={_cs(styles.col, styles.w50, styles.p5)} >
                                    <JipsTitle title={sections[2].heading} icon={<GiGrain />}/>
                                    { displaySectionThree()}
                                </div>
                            )}
                        </div>

                        <div className={_cs(styles.row, styles.pt10)}>
                            <div className="col">
                                {sections.length > 1 && (
                                    <>
                                        <div className={_cs(styles.row)}>
                                            <JipsTitle title={sections[1].heading} />
                                        </div>
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
                                <div>
                                    {displaySectionFour()}
                                </div>
                            </>
                        )}
                    </SideBar>
                </>
            )}

            {language === Language.ar && (
                <>
                    <SideBar className={_cs(styles.br, styles.p5)}>
                        {sections.length >= 4 && (
                            <>
                                <JipsTitle title={sections[3].heading} icon={<GiTakeMyMoney />} />
                                <div>
                                    {displaySectionFour()}
                                </div>
                            </>
                        )}
                    </SideBar>

                    <div className={styles.w67}>
                        <div className={_cs(styles.row, styles.bb)}>
                            {sections.length > 2 && (
                                <div className={_cs(styles.col, styles.w50, styles.p5)} >
                                    <JipsTitle title={sections[2].heading} icon={<GiGrain />} />
                                    { displaySectionThree()}
                                </div>
                            )}
                            <div className={_cs(styles.col, styles.w50, styles.p5, styles.bl)}>
                                <JipsTitle title="خلفية"/>
                                <div className={_cs(styles.row, styles.bb, styles.mt10, "bg-grey")}>
                                    <JipsText data={data.background} />
                                </div>
                                <div className={_cs(styles.row, styles.pt10)}>
                                    <div className={styles.col}>
                                        <JipsTitle title={data.sections[0].heading} />
                                        <div className={_cs(styles.row, styles.pt10)}>
                                            <JipsTable columns={scopeData.columns} rows={scopeData.rows} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={_cs(styles.row, styles.pt10)}>
                            <div className="col">
                                {sections.length > 1 && (
                                    <>
                                        <div className={_cs(styles.row)}>
                                            <JipsTitle title={sections[1].heading} />
                                        </div>
                                        {displaySectionTwo()}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );

}
