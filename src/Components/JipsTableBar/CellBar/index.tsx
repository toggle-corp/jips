import React, { useEffect } from 'react';
import { ComposedChart, Bar, XAxis, YAxis } from 'recharts';


export interface CellBarProps {
    bgcolor: string,
    color: string,
    name: string,
    value: number,
}

function CellBar(props: CellBarProps) {

    const { bgcolor, color, name, value } = props;
    const [dt, setDt] = React.useState<any>([])

    useEffect(() => {
        var val = [{
            "name": name,
            "val": (value > 0) ? value : 100,
            "total": 100
        }];

        setDt(val);
    }, [name, value]);

    const CustomLabel = (p:any) =>{
        return (
            <text x={(p.value>80) ? (p.x + p.width/2) : (p.x + p.width)}
                y={p.y}
                fill={(p.value>80) ? "#fff" : p.fill}
                dx={2}
                dy={5+p.height/2}
                fontSize={12}
            >
                {p.value + "%"}
            </text>
        );
    }

    return (
        <div style={{ width: "100%", height: '50%', marginTop: "auto", marginBottom: "auto" }}>
            {!isNaN(value) && (
                <ComposedChart
                    layout="vertical"
                    width={100}
                    height={45}
                    data={dt}
                >
                    <XAxis type="number" hide={true} domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" scale="band" hide={true} />
                    <Bar 
                        barSize={20} 
                        dataKey="val" 
                        fill={(value > 0) ? color : bgcolor} background={{ fill: bgcolor }} 
                        label={CustomLabel}
                    />
                </ComposedChart>
            )}
            {isNaN(value) && (
                <div
                    style={{
                        fontSize: 12,
                        backgroundColor: bgcolor,
                        color: color,
                        width: "100%",
                        display: "block",
                        marginLeft: 2
                    }}>
                    n/a
                </div>
            )}
        </div>
    );
}

export default CellBar;
