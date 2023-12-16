import React from 'react'
export default function ListCollection() {
    const college=[{id:1,stuName:"Deepak Ram",age:19},
                  {id:2,stuName:"DhanuShree",age:10},
                  {id:3,stuName:"Jaisuryah",age:18},]
            
    const display=college.map((col)=><li key={col.id}>ID: {col.id}, NAME: {col.stuName}, AGE: {col.age}</li>)              
  return (
    <div style={{backgroundColor:"yellow"}}>
        <h1>List</h1>
        {display}
        </div>
    
  )
}
