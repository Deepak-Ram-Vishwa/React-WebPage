import React, {useState} from 'react'

export default function StateHoldObject() {
    const[college,setCollege]=useState({cid:1,cname:"SKCT",year:2023});
    const changeName=()=>{
        setCollege((prevState)=>{return{...prevState,cname:"Sri Krishna College of Technology"}})
    }
  return (
    <div>
      <h1>College ID is {college.cid}</h1>
      <h1>College name is {college.cname}</h1>
      <button onClick={changeName}>Change Name</button>
      <h1>Year {college.year}</h1>
    </div>
  )
}
