
import React from "react";
import {BarChart,Bar,XAxis,YAxis,Tooltip} from "recharts";

export default function Dashboard({entries}){
 const dataMap={};
 entries.forEach(e=>{dataMap[e.category]=(dataMap[e.category]||0)+1});
 const chartData=Object.keys(dataMap).map(k=>({name:k,value:dataMap[k]}));

 return(
  <div className="card">
   <h2>Dashboard</h2>
   <BarChart width={500} height={250} data={chartData}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <Tooltip/>
    <Bar dataKey="value"/>
   </BarChart>
  </div>
 );
}
