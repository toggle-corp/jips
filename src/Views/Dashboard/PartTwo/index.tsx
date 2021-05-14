import React from 'react';
import { JipsBarChart, JipsTableBar, JipsTitle } from '../../../Components';
import { Dimension, Language, Section, SubSection } from '../../../types';
import SideBar from '../SideBar';
import { _cs } from '@togglecorp/fujs';
import { Doc } from '../../../types';

import { FaPeopleCarry } from "react-icons/fa";
import { AiFillSafetyCertificate, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSetting } from "react-icons/ai";

import styles from './styles.module.scss';
import { getBarChartData, getTableBarData, getTableData, tableData } from '../../../utils/dataUtil';
import { DataContext } from '../../../Context/DataContext';
import { LanguageContext } from '../../../Context';

export default function PartOne() {

    const [dimension, setDimension] = React.useState<Dimension>({ height: 0, width: 0 });

    const [scopeData, setScopeData] = React.useState<tableData>({columns:[], rows:[]});
    const [sections, setSections] = React.useState<Section[]>([]);
    const language = React.useContext(LanguageContext);
    const data:Doc = React.useContext(DataContext);

    React.useEffect(() => {
        const width = window.screen.availWidth - 20;
        const height = window.screen.availHeight - 100;
        setDimension({ height: height, width: width });
        const tableInfo:tableData = getTableData(data.sections[0].body[0]);
        getTableBarData(data.sections[0].body[0]);
        setScopeData(tableInfo);
        const filteredSections = data.sections.filter((section)=>section.heading && section.heading!= "")
        setSections(filteredSections);
    }, [data]);

    const displaySectionFive = () =>{
        if(sections.length > 4){
            const filteredSubSecs = sections[4].body.filter((subsec:SubSection)=>subsec.vars.length>0);

            const serviceData = (filteredSubSecs.length > 0) ? getTableBarData(filteredSubSecs[0]):{columns:[], rows:[]};
            const servceTitle = (filteredSubSecs.length > 0) ? filteredSubSecs[0].subHeading:"";

            const barChart = (filteredSubSecs.length > 1) ? getBarChartData({subsec:filteredSubSecs[1]}) : [];
            const barchartTitle = (filteredSubSecs.length > 1) ? filteredSubSecs[1].subHeading : "";
            return(
                <>
                        <JipsTableBar columns={serviceData.columns} data={serviceData.rows} title={servceTitle} />
                    <div className={""}>
                        <JipsBarChart data={barChart} height={250} width={500} title={filteredSubSecs[1].subHeading} />
                    </div>
                </>
            );
        }
        return "No data available!"
    }

    const displaySectionSix = ()=>{
        if(sections.length > 5){
            const filteredSubSecs = sections[5].body.filter((subsec:SubSection)=>subsec.vars.length>0);
            const disp = filteredSubSecs.map((subsec:SubSection)=>{
                const colRows = getTableBarData(subsec);
                return <JipsTableBar columns={colRows.columns} data={colRows.rows} title={subsec.subHeading} />
            });
            return disp;
        }
        return "No data available!"
    }

    const displaySectionSeven = ()=>{
        if(sections.length > 6){
            var rowCols;
            var cahrtData=[];
            const filteredSubSecs = sections[6].body.filter((subsec:SubSection)=>subsec.vars.length>0);

            rowCols = (filteredSubSecs.length > 0) ? getTableBarData(filteredSubSecs[1]) : {columns: [], rows:[]};
            cahrtData = (filteredSubSecs.length > 1)? getBarChartData({subsec:filteredSubSecs[0]}) : [];

            return (
                <div className={_cs(styles.row)}>
                    {language === Language.en && (
                        <>
                            <div className={_cs(styles.w40, styles.p5, styles.br)}>
                                {filteredSubSecs.length > 0 &&(
                                    <JipsBarChart data={cahrtData} height={245} width={dimension.width/3*0.85} title={filteredSubSecs[0].subHeading} />
                                )}
                            </div>
                            <div className={_cs(styles.w60, styles.p5)}>
                                { filteredSubSecs.length > 1 && (
                                    <JipsTableBar columns={rowCols.columns} data={rowCols.rows} title={filteredSubSecs[1].subHeading} />
                                )}
                            </div>
                        </>
                    )}
                    {language === Language.ar && (
                        <>
                            <div className={_cs(styles.w60, styles.p5)}>
                                { filteredSubSecs.length > 1 && (
                                    <JipsTableBar columns={rowCols.columns} data={rowCols.rows} title={filteredSubSecs[1].subHeading} />
                                )}
                            </div>
                            <div className={_cs(styles.w40, styles.p5, styles.bl)}>
                                {filteredSubSecs.length > 0 &&(
                                    <JipsBarChart data={cahrtData} height={220} width={dimension.width/3*0.85} title={filteredSubSecs[0].subHeading} />
                                )}
                            </div>
                        </>
                    )}
                </div>
            );
        }
        return "No data available!"
    }

    const displaySectionEight = () => {
        if(sections.length > 7){
            var rowCols;
            const filteredSubSecs = sections[7].body.filter((subsec:SubSection)=>subsec.vars.length>0);
            rowCols = (filteredSubSecs.length > 0) ? getTableBarData(filteredSubSecs[0]) : {columns: [], rows:[]};

            return (
                <>
                    { filteredSubSecs.length > 0 && (
                        <JipsTableBar columns={rowCols.columns} data={rowCols.rows} title={filteredSubSecs[0].subHeading} />
                    )}
                </>
            );
        }
        return "No data available!"
    }

    return (
        <div className={_cs(styles.row, styles.mt5)}>
            {language === Language.en && (
                <>
                    <SideBar className={_cs(styles.br, styles.p5)}>
                        {sections.length > 4 && (
                            <>
                                <JipsTitle title={sections[4].heading} icon={<AiOutlineSetting />} />
                                <div className={ _cs(styles.pt5)}>
                                    {displaySectionFive()}
                                </div>
                            </>
                        )}
                    </SideBar>

                    <div className={styles.w67}>
                        <div className={_cs(styles.row, styles.bb)}>
                            <div className={_cs(styles.col, styles.w50, styles.p5, styles.br)}>
                                {sections.length>5 &&(
                                    <>
                                        <JipsTitle title={sections[5].heading} icon={<FaPeopleCarry/>}/>
                                        <div className={_cs(styles.row, styles.mt10)}>
                                            {
                                                displaySectionSix()
                                            }
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className={_cs(styles.col, styles.w50, styles.p5)}>
                                {sections.length>7 &&(
                                    <>
                                        <JipsTitle title={sections[7].heading} icon={<AiOutlineArrowRight/>}/>
                                        <div className={_cs(styles.row, styles.mt10)}>
                                            {
                                                displaySectionEight()
                                            }
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className={_cs(styles.row, styles.pt10)}>
                            <div className={_cs(styles.col, styles.p5)}>
                                {sections.length>6 &&(
                                    <>
                                        <JipsTitle title={sections[6].heading} icon={<AiFillSafetyCertificate/>}/>
                                        <div className={_cs(styles.row, styles.mt10)}>
                                            {
                                                displaySectionSeven()
                                            }
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {language === Language.ar && (
                <>
                    <div className={styles.w67}>
                        <div className={_cs(styles.row, styles.bb)}>
                            <div className={_cs(styles.col, styles.w50, styles.p5)}>
                                {sections.length>7 &&(
                                    <>
                                        <JipsTitle title={sections[7].heading} icon={<AiOutlineArrowLeft/>}/>
                                        <div className={_cs(styles.row, styles.mt10)}>
                                            {
                                                displaySectionEight()
                                            }
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className={_cs(styles.col, styles.w50, styles.p5, styles.bl)}>
                                {sections.length>5 &&(
                                    <>
                                        <JipsTitle title={sections[5].heading} icon={<FaPeopleCarry />}/>
                                        <div className={_cs(styles.row, styles.mt10)}>
                                            {
                                                displaySectionSix()
                                            }
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className={_cs(styles.row, styles.pt10)}>
                            <div className={_cs(styles.col, styles.p5)}>
                                {sections.length>6 &&(
                                    <>
                                        <JipsTitle title={sections[6].heading} icon={<AiFillSafetyCertificate/>}/>
                                        <div className={_cs(styles.row, styles.mt10)}>
                                            {
                                                displaySectionSeven()
                                            }
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <SideBar className={_cs(styles.p5, styles.bl)}>
                        {sections.length > 4 && (
                            <>
                                <JipsTitle title={sections[4].heading} icon={<AiOutlineSetting />} />
                                <div className={ _cs(styles.pt5)}>
                                    {displaySectionFive()}
                                </div>
                            </>
                        )}
                    </SideBar>
                </>
            )}
        </div>
    );

}