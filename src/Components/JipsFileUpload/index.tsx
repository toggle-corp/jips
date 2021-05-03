import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import {Switch} from '@togglecorp/toggle-ui';
import {LangContext, Language} from '../../Context';

type JipsFileUploadProps = {
    name: string,
    multiple: boolean,
    onFileOpen?: (file: File) => void,
}

export default function JipsFileUpload(props: JipsFileUploadProps) {

    const { name, multiple, onFileOpen } = props;

    const lang = useContext(LangContext);
    
    const [isEn, setIsEn] = useState<boolean>(true);

    const handleSelectLang = () =>{
        lang.language = (!isEn) ? Language.en : Language.ar;
        setIsEn(!isEn);
    }

    const handleFileChange = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if(onFileOpen && event.target && event.target.files) {
            onFileOpen(event.target.files[0]);
        }
    }, [onFileOpen]);

    useEffect(()=>{
        setIsEn(lang.language === Language.en);
    }, [lang]);

    return (
        <div className={styles.center}>
            <div className={styles.fileUploadWrapper}>
                <button className={styles.uploadbtn}>Upload a file</button>
                <input type="file" name={name} onChange={handleFileChange} multiple={multiple} />
            </div>
            <h4>Select a language</h4>
            <Switch
                name="language"
                label={(isEn)? "English" :"Arabic"}
                onChange={handleSelectLang}
                value = {isEn}
            />
        </div>
    );
}
