import React from 'react';
import { Col, Row, Table, Typography } from 'antd';
import { ComposedChart, Bar, Tooltip, XAxis, YAxis, LabelList } from 'recharts';
import { SettingOutlined } from '@ant-design/icons';
import Education from './education';

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
                width={80}
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
        variables: 'Health: Births attended by skilled health personnel',
        incamp: 11,
        returnee: 24,
        non: 5,
    },
    {
        key: '2',
        variables: 'Water: Access to inproved drinking water source',
        incamp: 25,
        returnee: 26,
        non: 24,
    },
    {
        key: '3',
        variables: 'Sanitation: Access to improved sanitation facilites',
        incamp: 44,
        returnee: 11,
        non: 46,
    },
    {
        key: '4',
        variables: 'Documentation: Children under 5 years with a birth ceriticate',
        incamp: 35,
        returnee: 64,
        non: 47,
    },

];

export default function Access() {
    return (
        <>
        <Row>
            <Col>
                <div>
                    <Typography style={{ fontSize: "18px", color: "#0b0b92", fontWeight: 600, marginBottom: '25px' }}> <SettingOutlined /> Access to basic services</Typography>
                    <div style={{ minHeight: "29vh" }}>
                        <Table dataSource={data} columns={cols} pagination={false} />
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col style={{ paddingTop: "25px", paddingLeft:"80px" }}>
            <Education></Education>
            </Col>
        </Row>
        </>
    );
}
