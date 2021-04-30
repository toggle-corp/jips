
import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import { JipsNavBar } from '../../Components';
import html2canvas from 'html2canvas';

import PartOne from './PartOne';

import './styles.css';
import PartTwo from './PartTwo';

function Dashboard() {
    const [pageNum, setPageNum] = useState<number>(0);
    const divRef = React.useRef<HTMLDivElement>(null);
    const handleClick = async (ev: any) => {
        html2canvas(divRef.current!).then((canvas: HTMLCanvasElement) => {
            let link = document.createElement("a");
            document.body.appendChild(link);
            link.download = "html_image.jpg";
            link.href = canvas.toDataURL();
            link.target = '_blank';
            link.click();
                });
    }
    const handlepage = () => {
        (pageNum == 0) ? setPageNum(1) : setPageNum(0);
    }

    return (
        <div className="content">
            <div className="main" ref={divRef}>
                <JipsNavBar
                    title="KEY INDICATORS - DURABLE SOLUTIONS AND BASELINE ANALYSIS TAWILA LOCALITY, NORTH DARFUR"
                    subTitle="for the DSWG and the UN Peacebuilding Fund in Sudan"
                />
                <div 
                    className="container"
                    style={{marginTop: "10px"}}
                >
                    {pageNum > 0 && (<PartTwo />) }
                    {pageNum == 0 && <PartOne /> }
                </div>
            </div>
            <div className="download">
                <Button className="primary" onClick={handleClick}> Click to save</Button>
                <Button className="primary" onClick={handlepage}> Next Page</Button>
            </div>

        </div>
    );
}

export default Dashboard;
