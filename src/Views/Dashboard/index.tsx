import React, { useState } from 'react';
import html2canvas from 'html2canvas';
// @ts-ignore
import { JipsNavBar } from '../../Components';
import {
    Button,
    Modal,
} from '@togglecorp/toggle-ui';
import PartOne from './PartOne';
import PartTwo from './PartTwo';
import JipsFooter from '../../Components/JipsFooter';
import { DataContext } from '../../Context/DataContext';
import { Doc } from '../../types';
import { jsPDF } from "jspdf";
import styles from './styles.module.scss';

function Dashboard() {
    const [state, setState] = useState({ "heading": "", "subHeading": "", "footer": "" });
    const [downloading, setDownloading] = useState(false);

    const data: Doc = React.useContext(DataContext);

    const handleClick = React.useCallback(async (ev: any) => {
        setDownloading(true);

        window.setTimeout(async () => {
            const pageOne = document.getElementById("pageOne");
            const pageTwo = document.getElementById("pageTwo");

            const pdf = new jsPDF({ orientation: "landscape", format:[297, 210], unit:"mm" });

            if (pageOne != null){
                await html2canvas(pageOne).then((canvas: HTMLCanvasElement) => {
                    const pageOneImg = canvas.toDataURL("image/png");
                    pdf.addImage(pageOneImg, 'png', 5, 5, 287, 200);
                    pdf.addPage();
                });
            }

            if (pageTwo != null){
                await html2canvas(pageTwo).then((cv: HTMLCanvasElement) => {
                    const pageTwoImg = cv.toDataURL("image/png");
                    pdf.addImage(pageTwoImg, 'png', 5, 5,  287, 200);
                });
            }

            pdf.save("download.pdf");
            setDownloading(false);
        }, 0);
    }, [setDownloading]);

    React.useEffect(() => {
        const header = data.header.split("\n")[0];
        const subhead = (data.header.split("\n").length > 0) ? data.header.split("\n")[1] : "";
        const footer = data.footer;
        setState({ heading: header, subHeading: subhead, footer: footer });

    }, [data]);

    return (
        <div className={styles.dashboard}>
            {downloading && (
                <Modal
                    heading="Generating pdf"
                    closeButtonHidden
                    onClose ={()=>setDownloading(false)}
                >
                    Please wait...
                </Modal>
            )}
            <div className={styles.main}>
                <div
                    className={styles.page}
                    id="pageOne"
                >
                    <div className={styles.pagecontent}>
                        <JipsNavBar
                            title={state.heading}
                            subTitle={state.subHeading}
                        />
                        <div className={styles.container}>
                            <PartOne />
                        </div>
                        <JipsFooter
                            title={state.footer}
                            subTitle="feedback:info@jips.org"
                        />
                    </div>
                </div>
                <div
                    id="pageTwo"
                    className={styles.page}
                >
                    <div className={styles.pagecontent}>
                        <JipsNavBar
                            title={state.heading}
                            subTitle={state.subHeading}
                        />
                        <div className={styles.container}>
                            <PartTwo />
                        </div>
                        <JipsFooter
                            title={state.footer}
                            subTitle="feedback:info@jips.org"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button
                    disabled={downloading}
                    className="primary"
                    name="save"
                    onClick={handleClick}
                >
                    Export pdf
                </Button>
            </div>
        </div>
    );
}
export default React.memo(Dashboard);
