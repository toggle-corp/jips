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
                width={70}
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
        variables: 'own land',
        incamp: 14,
        returnee: 70,
        non: 70,
    },
    {
        key: '2',
        variables: 'own land and have registration documents',
        incamp: "n/a",
        returnee: 3,
        non: 6,
    },
    {
        key: '3',
        variables: 'rent land',
        incamp: 84,
        returnee: 28,
        non: 28,
    },
    {
        key: '3',
        variables: 'reportbconflicts/issues with their agriculture land',
        incamp: 23,
        returnee: 27,
        non: 13,
    },
    {
        key: '4',
        variables: 'acesss the same land as before displacement ',
        incamp: 17,
        returnee: 83,
        non: "n/a",
    },
];

export default function TableBar() {
    return (
        <div>
            <Typography style={{ fontSize: "18px", color: "#0b0b92", fontWeight: 600, marginBottom: '25px' }}> Acess to agriculture land</Typography>
        <div style={{minHeight:"29vh", padding:"0px", marginTop:'20px'}}>
        <Typography>Households that:</Typography>
            <Table dataSource={data} columns={cols} pagination={false} />
        </div>
        </div>
    );
}
