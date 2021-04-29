import React from 'react';
import { Table, Typography } from 'antd';
import returnee from '../../icons/returnee.svg';
import './styles.css';
import { SearchOutlined } from '@ant-design/icons';

const cols = [
  {
    title: '',
    dataIndex: 'variables',
    key: 'variables',
    render: (text: string) => <div className="d-flex-col">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img style={{ height: "35px", width: "35px", marginLeft: "auto", marginRight: "auto" }} src={returnee} />
      </div>
      {text}
    </div>,
  },
  {
    title: 'Households',
    dataIndex: 'households',
    key: 'households',
    render: (val: any) => <Typography style={{ color: "#9c6e97", fontSize: "18px", fontWeight: "bold" }}>
      {val}
    </Typography>
  },
  {
    title: 'Individual',
    dataIndex: 'individual',
    key: 'individual',
    render: (val: any) => <Typography style={{ color: "#9c6e97", fontSize: "18px", fontWeight: "bold" }}>{val}</Typography>
  },
];

const data = [
  {
    key: '1',
    variables: 'IDPS in capms',
    households: 431,
    individual: 2500,
    tags: ["camps"],
  },
  {
    key: '2',
    variables: 'IDP returnees',
    households: 399,
    individual: 2448,
    tags: ["returnee"],
  },
  {
    key: '3',
    variables: 'Non-displaced',
    households: 321,
    individual: 1705,
    tags: ["nondisplaced"],
  },
];

interface JipsTableProps {
  columns?: any[],
  rows?: any[],
  title: string,
}

export default function JipsTable(props?: any) {
  // const {columns, rows} = props;
  const { title } = props;
  return (
    <div style={{ minHeight: "29vh", padding: "10px" }}>
      <Typography style={{ fontSize: "18px", color:"#0b0b92", fontWeight: 600, marginBottom: '25px' }}> <SearchOutlined /> {title}</Typography>
      <Table dataSource={data} columns={cols} pagination={false} />
    </div>
  );
}
