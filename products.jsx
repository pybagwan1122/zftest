import React, {useState, useEffect} from 'react';
import axios from "axios";


export default function ProductDetails(){
  const [list, setList] = useState([])
 
 useEffect(()=>  {
    axios.get("https://dummyjson.com/products")
   .then((data)=>setList(data["products"]));
 },[])

  return(
    <div>
<ul>
{list.map((dtt)=><link> <li key={dtt.id}>{dtt.title}</li></link>)}
</ul>

    </div>
  )
}