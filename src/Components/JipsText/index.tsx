import React from 'react';

interface JipsTextProps {
    title: string,
    data: string,
}

export default function JipsText(props:JipsTextProps) {
    const {title, data} = props;
    // const {Title, Paragraph} = h3;
    
    // const parseText = () => {
    //     const paragraphs = data.replace("/\r", "").split("/\n").map((para:string, index:any)=><Paragraph key={index}>{para}</Paragraph>);
    //     return paragraphs;
    // };

    return (
        <div style={{minHeight:"29vh"}}>
            <h3 style={{fontSize:"18px", color:"#0b0b92", fontWeight:600, marginBottom:'25px'}}> {title}</h3>
            <p>
                {/* {parseText()} */}
            </p>
        </div>
    );
}