
import React,{useState,useEffect} from "react";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import Table from "./components/Table";
import "./style.css";

export default function App(){
 const [entries,setEntries]=useState([]);

 useEffect(()=>{
  const data=JSON.parse(localStorage.getItem("entries")||"[]");
  setEntries(data);
 },[]);

 const addEntry=(entry)=>{
  const updated=[...entries,entry];
  setEntries(updated);
  localStorage.setItem("entries",JSON.stringify(updated));
 };

 return(
  <div className="container">
   <h1>📘 Knowledge Bank</h1>
   <Dashboard entries={entries}/>
   <Form addEntry={addEntry}/>
   <Table entries={entries}/>
  </div>
 );
}
