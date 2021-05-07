import React from 'react';
import * as XLSX from 'xlsx';
import JipsFileUpload  from '../../Components/JipsFileUpload';
import { Doc, Language } from '../../types';

import { parseExcelToSections, removeBlankRowAtBeginingAndEnd } from '../../utils/excelParserUtil';

interface HomeProps {
  setLang?:(lang:Language)=>void,
  setData?:(data:Doc)=>void,
}

export default function Home(props: HomeProps){

  const {setLang, setData} = props;

  const handleFileUpload = async (file: File) => {
      const extensions = file.name.split("\.")[1];
      if (['xls', 'xlsx'].indexOf(extensions) < 0){
        alert("Invalid File!");
        return false;
      }
      var reader = new FileReader();
      reader.onload = function (e) {
        if (e.target !== null){
          var data = e.target.result;
          let readedData = XLSX.read(data, {type: 'binary'});
          const wsname = readedData.SheetNames[1];
          const ws = readedData.Sheets[wsname];
          const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
          const cleanData = removeBlankRowAtBeginingAndEnd(dataParse);
          const parsedData = parseExcelToSections(cleanData);
          // console.log(parsedData);
          if(parsedData && setData) setData(parsedData);
        }
      };
      reader.readAsBinaryString(file);
    }
 return(
    <JipsFileUpload
      name="file"
      multiple={false}
      onFileOpen={handleFileUpload}
      setLang={setLang!}
    />
 );
}
