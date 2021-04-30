import React from 'react';
import { Col, Row, Table, Typography } from 'antd';
import { ComposedChart, Bar, Tooltip, XAxis, YAxis, LabelList } from 'recharts';
import Security from './security';
import { SecurityScanOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';


const colors = ["#505BA1", "#491746", "#852D57"];
const renderGraph = (text: string, index: number) => {
    var dt = [{
        "name": index,
        "val": text,
        "total": 100
    }];

    return (
        <div style={{ width: "50px", height: 'auto', marginTop: "auto", marginBottom: "auto" }}>
            <ComposedChart
                layout="vertical"
                width={70}
                height={55}
                data={dt}
            >
                <Tooltip></Tooltip>
                <XAxis type="number" hide={true} domain={[0, 100]} />
                <YAxis dataKey="name" type="category" scale="band" hide={true} />
                <Bar barSize={20} dataKey="val" fill={colors[index]} background={{ fill: '#eee' }}>
                    <LabelList dataKey="val" position="middle" fill="#fff" />
                </Bar>
            </ComposedChart>
        </div>
    );
}

const cols = [
    {
        title: '',
        dataIndex: 'variables',
        key: 'variables',
        render: (val: string) => <div>{val}</div>
    },
    {
        title: 'IDPs in camp',
        dataIndex: 'incamp',
        key: 'incamp',
        render: (text: string) => renderGraph(text, 0),
    },
    {
        title: 'IDPs returnees',
        dataIndex: 'returnee',
        key: 'returnee',
        render: (text: string) => renderGraph(text, 1),
    },
    {
        title: 'Non displaced',
        dataIndex: 'non',
        key: 'non',
        render: (text: string) => renderGraph(text, 2),
    },
];

const data = [
    {
        key: '1',
        variables: 'Displaced households reporting they can particite in local decision making',
        incamp: 66,
        returnee: 84,
        non: 0,
    },
    {
        key: '2',
        variables: 'Non-displaced households reporting that IDPs/ returnees should be able to particpate in local decision making',
        incamp: 0,
        returnee: 0,
        non: 73,
    },

];

export default function Civic() {
    return (
        <>
        <Row>
            <Col>
                <div>
                    <Typography style={{ fontSize: "18px", color: "#0b0b92", fontWeight: 600, marginBottom: '25px' }}> <UsergroupDeleteOutlined /> Civic Participation</Typography>
                    <div style={{ minHeight: "29vh" }}>
                        <Table dataSource={data} columns={cols} pagination={false} />
                    </div>
                </div>
            </Col>
            </Row>
            <Row>
            <Typography style={{ fontSize: "18px", color: "#0b0b92", fontWeight: 600, marginBottom: '25px', paddingTop:"50px", paddingLeft:'20px' }}> <SecurityScanOutlined /> Safety and Security</Typography>
                <Col style={{ paddingTop: "10px", paddingLeft:"40px" }}>
                    <Security></Security>
                </Col>
            </Row>
            </>
    );
}
