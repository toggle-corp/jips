import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { JipsNavBar } from '../../Components';
import { Button } from '@togglecorp/toggle-ui';
import PartOne from './PartOne';
import PartTwo from './PartTwo';
import JipsFooter from '../../Components/JipsFooter';
import { DataContext } from '../../Context/DataContext';
import { Doc } from '../../types';
import styles from './styles.module.scss';

function Dashboard() {
    const [pageNum, setPageNum] = useState<number>(0);
    const [state, setState] = useState({ "heading": "", "subHeading": "", "footer": "" });

    const divRef = React.useRef<HTMLDivElement>(null);

    const data: Doc = React.useContext(DataContext);

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
    // const myDocument = (ev: any) => (
    //     ReactPDF.render(<PartOne />, `${__dirname}/example.pdf`)
    // );

    React.useEffect(() => {
        const header = data.header.split("\n")[0];
        const subhead = (data.header.split("\n").length > 0) ? data.header.split("\n")[1] : "";
        const footer = data.footer;
        setState({ heading: header, subHeading:subhead, footer:footer });

    }, [data]);

    const handlepage = () => {
        (pageNum === 0) ? setPageNum(1) : setPageNum(0);
    }
    return (
        <>
            <div className={styles.dashboard}>
                <div className={styles.main} ref={divRef}>
                    <JipsNavBar
                        title={state.heading}
                        subTitle={state.subHeading}
                    />
                    <div className={styles.container}>
                        {pageNum === 0 && <PartOne />}
                        {pageNum > 0 && <PartTwo />}
                    </div>
                    <JipsFooter
                        title={state.footer}
                        subTitle="feedback:info@jips.org"
                    />
                </div>
                <div className={styles.buttons}>
                    <Button className={"primary"} name="save" onClick={handleClick}>Save as jpg</Button>
                    <Button className={"primary"} name="save" >Save as pdf</Button>
                    <Button className={"primary"} name="next" onClick={handlepage}>{(pageNum > 0) ? "Prev Page" : "Next Page"}</Button>
                </div>
            </div>
        </>
    );
}
export default Dashboard;

