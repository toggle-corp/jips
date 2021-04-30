import React from 'react';
import { Table, Typography } from 'antd';
import { ComposedChart, Bar, Tooltip, XAxis, YAxis, LabelList } from 'recharts';

const colors = ["#505BA1", "#491746", "#852D57"];
const renderGraph = (text: string, index: number) => {
    var dt = [{
        "name": index,
        "val": text,
        "total": 100
    }];

    return (
        <div style={{ width: "50px", height: 'auto', marginTop:"auto", marginBottom:"auto" }}>
            <ComposedChart
                layout="vertical"
                width={80}
                height={55}
                data={dt}
            >
                <Tooltip></Tooltip>
                <XAxis type="number" hide={true} domain={[0,100]} />
                <YAxis dataKey="name" type="category" scale="band" hide={true} />
                <Bar barSize={20} dataKey="val" fill={colors[index]} background={{ fill: '#eee' }}>
                    <LabelList dataKey="val" position="middle" fill="#fff"/>
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
        render: (val:string)=><div>{val}</div>
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
        render: (text: string) => renderGraph(text,1),
    },
    {
        title: 'Non displaced',
        dataIndex: 'non',
        key: 'non',
        render: (text: string) => renderGraph(text,2),
    },
];

const data = [
    {
        key: '1',
        variables: 'Persons below 20 years of age',
        incamp: 57,
        returnee: 56,
        non: 49,
    },
    {
        key: '2',
        variables: 'Households headed by a woman',
        incamp: 35,
        returnee: 35,
        non: 25,
    },

];

export default function JipsTableBar2() {
    return (
        <div>
            <Typography style={{ fontSize: "18px", color: "#0b0b92", fontWeight: 600, marginBottom: '25px' }}></Typography>
        <div style={{minHeight:"29vh"}}>
            <Table dataSource={data} columns={cols} pagination={false} />
        </div>
        </div>
    );
}
