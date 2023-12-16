import React from 'react'

export default function TryCatch({fruit}) 
{
  try
  {
    if(fruit==="Onion")
    {
        throw new Error("Not a fruit")
    }
  }
  catch(error)
  {
    console.log("Not a fruit");
    document.write(error)
  }
  finally{
    document.write(" Always Executed")
  }
  return (
    <div>
      {fruit}
    </div>
  )
}
