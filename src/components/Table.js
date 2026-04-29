
import React from "react";

export default function Table({entries}){
 return(
  <div className="card">
   <h2>Entries</h2>
   <table>
    <thead>
     <tr><th>Date</th><th>Topic</th><th>Category</th><th>Notes</th></tr>
    </thead>
    <tbody>
     {entries.map((e,i)=>(
      <tr key={i}>
       <td>{e.date}</td>
       <td>{e.topic}</td>
       <td>{e.category}</td>
       <td>{e.notes}</td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
}
