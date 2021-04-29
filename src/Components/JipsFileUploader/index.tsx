import React from 'react';
import { Col, Row, Upload, Typography, Switch} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

interface JipsFileUploaderProps{
    name?: string,
    multiple?: boolean|false,
    action?: string,
    onChange?: (info: any) => void,
    beforeUpload?: (file: any) => Promise<void>,
};

export default function JipsFileUploader(props: JipsFileUploaderProps){
    const {Dragger} = Upload;
    return (
        <div style={{ borderStyle: "hidden", boxShadow: "10px 10px 5px grey", width: '35%', margin: 'auto', marginTop: '15%' }}>
            <Row>
                <Col style={{marginLeft:'10%', marginRight:'10%', marginTop:'10%', width:'100%'}}>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                    <InboxOutlined style={{ color: 'blue'}}> </InboxOutlined>
                    </p>
                    <Typography className="ant-upload-text" style={{ color: '#242526' }}>Select a file or drag file here</Typography>
                </Dragger>
                </Col>
            </Row>
            <Row>
                <Col style={{width: '20%', margin: 'auto'}}>
                <Typography style={{ color: '#242526', marginTop: '40px' }}>Select a language</Typography>
                <Switch style={{ marginTop: '30px', marginBottom:'20px' }} checkedChildren="English" unCheckedChildren="Arabic" defaultChecked />
                </Col>
            </Row>
        </div>
    );
}