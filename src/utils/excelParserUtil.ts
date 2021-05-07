import { Doc, KeyValues, Section, SubSection, Values } from "../types";

/**
 * Removes empty arrays from begining and end of a 2D array of spreadsheet
 * @param data[][]
 * @returns data[][]
 */
export function removeBlankRowAtBeginingAndEnd(data:any[]){

    if (data.length === 0) return data;
    const cleanData = data.filter((row:any[], index:number)=>(row.length>0 || (index>0 && data[index-1].length>0 )));
    return cleanData;
}

/**
 * Function to export section mapping for the 
 */
export function parseExcelToSections(data:any[]){
    if(data.length < 7 || data[0].length < 2) return null;

    const userInterface:Doc = {
        header:data[0][1],
        footer:data[1][1],
        background:data[2][1],
        sections:[],
    }

    var docSec:Section;
    var sub:SubSection;
    var head:any;
    var subhead:any;

    const keys = data[3].slice(2);

    data.slice(4).forEach((datum) => {
        if( (datum.length === 1 || datum.length >=5 )&& (typeof datum[0] !== 'undefined') && (datum[0] !== null) && (datum[0] !== '')){
            if(typeof head != 'undefined' && typeof docSec != 'undefined') {
                docSec.body.push(sub);
                subhead = "";
                sub = {"subHeading":subhead, "vars":[]}; 
                userInterface.sections.push(docSec);
            }

            head = datum[0];
            docSec = {
               "heading":head,
               "body":[],
            };
        }

        if(datum.length === 2 || datum.length === 0){
            if (sub !== undefined && subhead !== undefined) {
                docSec.body.push(sub);
            }
            subhead = (datum.length===2)?datum[1] : "";
            sub = {"subHeading":subhead, "vars":[]};
        }

        if(datum.length >=5) {

            var measure:any = datum[1];
            var values = datum.slice(2);

            var kv:KeyValues = {
                "keys":keys,
                "values":values,
            }

            var v:Values = {
                "variable": measure,
                "data":kv,
            }

            if(!sub){
                subhead = "";
                sub = {
                    "subHeading":"",
                    "vars": []
                };
            }
            sub.vars.push(v);
        }
    });

    return userInterface;
}