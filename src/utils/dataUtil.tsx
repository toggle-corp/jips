import React from 'react';
import { createTextColumn } from '../Components/JipsTable/tools/tableHelpers';
import CellBar from '../Components/JipsTableBar/CellBar';
import { SubSection, Values } from "../types";
import { bgColors, colors } from './colorUtil';
import { listToGroupList, mapToList } from '@togglecorp/fujs';
import { IDPsInCamps, IDPsReturnees, NonDisplaced } from '../icons';
import { ReactComponent } from '*.svg';
import { Col } from '../Components/JipsTableBar/Table';


export interface tableData {
    columns:any[],
    rows:any[],
}

export const getTableData = ( subsec: SubSection) => {
    var rowCols:tableData;

    const columns = [];
    const colKeys:string[] = [];
    const vars:string[] = subsec.vars[0].data.keys;
    const rows:any[] = [];
    var col = createTextColumn<any, string>('variables','',(item: any) => item["variable"],);

    columns.push(col)
    colKeys.push('variables');

    subsec.vars.forEach((measure:Values)=>{
        var key = (measure.variable.split("-").length > 0)?measure.variable.split("-")[1] : measure.variable;
        var title = key.trim();
        key = key.toLowerCase().replace(" ", "");
        colKeys.push(key);
        col = createTextColumn<any, string>(key, title,(item: any) => item[key],);
        columns.push(col);
    });


    vars.forEach((variable:string, index:number) => {
        var row:any = {};
        row["variable"] = variable;
        row["key"] = index;

        colKeys.slice(1).forEach((key:string, ind:number)=>{
            row[key] = subsec.vars[ind].data.values[index];
        });

        rows.push(row);
    });

    rowCols = {
        rows: rows,
        columns: columns,
    }

    return rowCols;
}

export const getTableBarData = (subsec:SubSection) => {

    var rowCol:tableData;
    const columns:Col[] = [];
    const rows:any = [];

    const keySet:any = [];

    var col:Col = {
            key: "variable",
            name: "",
            render: (item: any) => {return <>{item["variable"]} </>;}
    }

    columns.push(col)
    keySet.push('variable');

    subsec.vars[0].data.keys.forEach((variable:string, index)=>{
        var key = variable.replace("-", "").replace(" ", "");
        key = key.toLowerCase().replace(" ", "");
        keySet.push(key);

        var icon:any;

        switch(index){
            case 0: icon = <IDPsInCamps />; break;
            case 1: icon = <IDPsReturnees/>; break;
            case 2: icon = <NonDisplaced/>; break;
            default: icon = ""; break;
        }

        col = {
            key: key,
            name: variable,
            icon: icon,
            render: (item: any) => {return <CellBar name={item["key"]} value={item[key]} color={colors[index%3]} bgcolor={bgColors[index%3]} />;}
        }

        columns.push(col);
    });


    subsec.vars.forEach((measure:Values, index:number) => {
        var row:any = {};
        row["variable"] = measure.variable;
        row["key"] = index;

        keySet.slice(1).forEach((key:string, kIndex:number)=>{
            row[key] = Math.round(subsec.vars[index].data.values[kIndex]*100);
        });

        rows.push(row);
    });

    rowCol = {
        columns: columns,
        rows: rows,
    }
    return rowCol;
}

interface GetBarChartProps {
    subsec:SubSection,
    filterKey?:string,
}
export const getBarChartData = (props:GetBarChartProps) => {
    const {subsec, filterKey} = props;
    const keyMaps = subsec.vars[0].data.keys.map((key:string, index:number)=> {return {name:key, key:index,}});
    const variables = (filterKey)?subsec.vars.filter((variable)=>variable.variable.toLowerCase().includes(filterKey)):subsec.vars;
    const data = keyMaps.map((key, index) => {
        var k = key
        variables.forEach((variable:Values)=>{
            var v = variable.variable.trim();
            k = {...k, [v]:Math.round(variable.data.values[index]*100)};
        })
        return k;
    });
    return data;
}


export const getActivityData = (data: SubSection) => {
    const combined = data.vars.flatMap((v: Values) => {
        const { data, variable } = v;
        const [activity, gender] = variable.split(' - ');
        const { keys, values } = data;
        const activities = keys.map((k: string, index: number) => ({
            key: k,
            [activity]: Math.round(values[index]*100),
            name: gender.trim().toLowerCase(),
        }));
        return activities;
    });

    return combined;
}

interface Activity {
    key: string;
    name: string;
}

export const getGenderActivityData = (data: Activity[], key: string) => mapToList(
    listToGroupList(data.filter(v => v.key === key), v => v.name),
    v => Object.assign({}, ...v),
)
