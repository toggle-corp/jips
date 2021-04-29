import React from 'react';
import {Typography} from 'antd';
import {FileTextOutlined} from '@ant-design/icons';

interface JipsTextProps {
    title: string,
    data: string,
}

export default function JipsText(props:JipsTextProps) {
    const {title, data} = props;
    const {Title, Paragraph} = Typography;
    
    const parseText = () => {
        const paragraphs = data.replace("/\r", "").split("/\n").map((para:string, index:any)=><Paragraph key={index}>{para}</Paragraph>);
        return paragraphs;
    };

    return (
        <div style={{minHeight:"29vh"}}>
            <Typography style={{fontSize:"18px", color:"#0b0b92", fontWeight:600, marginBottom:'25px'}}> <FileTextOutlined /> {title}</Typography>
            <Typography>
                {parseText()}
            </Typography>
        </div>
    );
}
