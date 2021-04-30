import React from 'react';
import { Row, Col, Typography } from 'antd';
import { JipsBarChart, JipsTable, JipsTableBar, JipsText, TableBar } from '../../../Components';
import { UsergroupDeleteOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import JipsStackedBarChart from '../../../Components/JipsStackedBarChart';
import Access from '../../../Components/Access';
import Civic from '../../../Components/Civic';


export default function PartTwo() {
    return (
        <Row>
            <Col span={8} style={{ borderRight: "2px solid #e8e8e8", paddingTop: "5px" }}>
                <Access/>
            </Col>
            <Col span={16}>
                <Row>
                    <Col span={12} style={{ borderRight: "2px solid #e8e8e8", paddingTop: "5px" }}>
                       <Civic/> 
                    </Col>
                    <Col span={12}></Col>

                </Row>
                <Row>
                    <Col span={24}>
                        {/* <Typography>Intentions for the future</Typography> */}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}