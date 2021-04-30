import React from 'react';
import { Row, Col, Typography } from 'antd';
import { JipsBarChart, JipsTable, JipsTableBar, JipsText, TableBar } from '../../../Components';
import { UsergroupDeleteOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import JipsStackedBarChart from '../../../Components/JipsStackedBarChart';
import JipsBarChart2 from '../../../Components/JipsBarChart2';
import JipsTableBar2 from '../../../Components/JipsTableBar2';


export default function PartOne() {
    return (
        <Row>
            <Col span={16}>
                <Row>
                    <Col span={12}>
                        <Row style={{ borderRight: "2px solid #e8e8e8", paddingRight: "10px" }}>
                            <Col span={24} style={{ borderBottom: "2px solid #e8e8e8" }}>
                                <JipsText
                                    title="Background"
                                    data={"The UN Peacebuilding Fund (PBF) projects in Darfur are implemented by UNDP, UNHCR, UNICEF, IOM, UN-Habitat and FAO. The agencies have actively taken part in designing the PBF data collection component for the eight localities in Darfur. The Durable Solutions Working Group (DSWG) has overseen all studies. The Joint IDP Profiling Service (JIPS) was requested by the DSWG to develop methodology, tools and conduct the  analysis in a consultative manner. IOM collected the household survey data and the Sudanese Development Initiative (SUDIA), has been managing the area-level data collection and analysis. In-depth analytical reports by locality available through the DSWG. "}
                                />
                            </Col>
                            <Col span={24}>
                                <JipsTable
                                    title="Scope of the Study" />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} style={{ padding: "10px" }}>
                        <Row></Row>
                        <Row>
                            <Col span={24}>
                                <TableBar />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ borderTop: "2px solid #e8e8e8", paddingTop: "5px" }}>
                    <Col span={24}>
                        <Row>
                            <Col><Typography style={{ fontSize: "18px", color: "#0b0b92", fontWeight: 600, marginBottom: '25px' }}> <UsergroupDeleteOutlined /> Basic demographics of the samples</Typography></Col>
                        </Row>
                        <Row>
                            <Col span={14}><JipsTableBar2 /></Col>
                            <Col span={10} style={{ borderLeft: "2px solid #e8e8e8", paddingTop: "5px" }} ><JipsBarChart /></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col span={8} style={{ height: "87vh", borderLeft:"2px solid #e8e8e8" }}>
                <Row style={{ paddingLeft: "30px" }}>
                    <Col span={24}>
                        <Typography style={{ fontSize: "18px", color: "#0b0b92", fontWeight: 600, marginBottom: '25px' }}> <MoneyCollectOutlined /> Livelihoods</Typography>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <JipsTableBar />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <JipsStackedBarChart />
                        <Row>
                    <Col style={{ paddingTop: "120px", paddingLeft:"50px"}}>
                    <JipsBarChart2/>
                    </Col>
                </Row>
                    </Col>
                </Row>


            </Col>
        </Row>

    );
}