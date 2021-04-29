import React from 'react';
import { Table } from 'antd';
import { ComposedChart, Bar, Tooltip, XAxis, YAxis, LabelList } from 'recharts';

const colors = ["#505BA1", "#491746", "blue"];
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
                width={130}
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
        variables: 'case 01',
        incamp: 40,
        returnee: 20,
        non: 30,
    },
    {
        key: '2',
        variables: 'case 02',
        incamp: 50,
        returnee: 25,
        non: 25,
    },
    {
        key: '3',
        variables: 'case 03',
        incamp: 60,
        returnee: 15,
        non: 25,
    },
];

export default function JipsTableBar() {
    return (
        <div style={{minHeight:"29vh", padding:"10px"}}>
            <Table dataSource={data} columns={cols} pagination={false} />
        </div>
    );
}
