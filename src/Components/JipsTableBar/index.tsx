import React from 'react';
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
        variables: 'relying on agriculture as their min livelihoods source',
        incamp: 69,
        returnee: 84,
        non: 73,
    },
    {
        key: '2',
        variables: 'not having enought food or money to but food the 7 days preceding the survey',
        incamp: 68,
        returnee: 66,
        non: 52,
    },

];

export default function JipsTableBar() {
    return (
        <div>
        <div style={{minHeight:"29vh"}}>
            <h1>JipsTableBar component</h1>
        </div>
        </div>
    );
}
