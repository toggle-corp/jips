import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Switch } from '@togglecorp/toggle-ui';
import { LanguageContext } from '../../Context';
import { Language } from '../../types';
import { Link } from 'react-router-dom';

type JipsFileUploadProps = {
    name: string,
    multiple: boolean,
    onFileOpen?: (file: File) => void,
    setLang: (lang: Language) => void,
    error?: string,
}

export default function JipsFileUpload(props: JipsFileUploadProps) {

    const { name, multiple, onFileOpen, setLang, error } = props;

    const lang = useContext(LanguageContext);

    const [isEn, setIsEn] = useState<boolean>(true);

    const [err, setErr] = useState<string>("");

    const handleSelectLang = () => {
        setLang((!isEn) ? Language.en : Language.ar);
        setIsEn(!isEn);
    }

    const handleFileChange = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (onFileOpen && event.target && event.target.files) {
            onFileOpen(event.target.files[0]);
        }
    }, [onFileOpen]);

    useEffect(() => {
        setIsEn(lang === Language.en);
        if(error && error !== "") setErr(error);
    }, [lang, error]);

    return (
        <div className={styles.center}>
            {error &&
                <>
                    <div className={styles.error}>
                        {error}
                    </div>
                </>
            }
            <div>
                <a
                    href="https://github.com/toggle-corp/jips/blob/develop-main/src/Sample%20data.xlsx?raw=true"
                >
                    Download Sample
                </a>
            </div>
            <div className={styles.fileUploadWrapper}>
                <button className={styles.uploadbtn}>Upload a file</button>
                <input type="file" name={name} onChange={handleFileChange} multiple={multiple} />
            </div>
            <h4>Select a language</h4>
            <Switch
                name="language"
                label={(isEn) ? "English" : "Arabic"}
                onChange={handleSelectLang}
                value={isEn}
            />
        </div>
    );
}
