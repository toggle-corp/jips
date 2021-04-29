import React from 'react';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import * as XLSX from 'xlsx';
import { JipsFileUploader } from '../../Components';
function Home() {

  const history = useHistory();
  const handleFileUpload = async (file: File) => {

    const extensions = file.name.split("\.")[1];
    if (['xls', 'xlsx'].indexOf(extensions) < 0){
      message.error("Invalid File!");
      return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
      if (e.target !== null){
        var data = e.target.result;
        let readedData = XLSX.read(data, {type: 'binary'});
        const wsname = readedData.SheetNames[1];
        const ws = readedData.Sheets[wsname];
        const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
        // modify the data here as per the need
        console.log(dataParse);
      }
    };
    reader.readAsBinaryString(file);
    history.push('/dashboard');
  }

  return (
    <JipsFileUploader
      name="file"
      multiple={false}
      beforeUpload={handleFileUpload}
    />
  );
}

export default Home;
