
import React,{useState} from "react";

export default function Form({addEntry}){
 const [form,setForm]=useState({date:"",topic:"",category:"",notes:""});
 const handleChange=e=>setForm({...form,[e.target.name]:e.target.value});

 return(
  <form className="card" onSubmit={e=>{e.preventDefault();addEntry(form);}}>
   <h2>Add Learning</h2>
   <input name="date" placeholder="Date" onChange={handleChange}/>
   <input name="topic" placeholder="Topic" onChange={handleChange}/>
   <input name="category" placeholder="Category" onChange={handleChange}/>
   <textarea name="notes" placeholder="Notes" onChange={handleChange}/>
   <button>Add</button>
  </form>
 );
}
