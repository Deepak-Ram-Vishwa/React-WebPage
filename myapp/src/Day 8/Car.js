// import React from 'react'

// export default function Car({carName}) {
//     if(carName==="JCB")
//     {
//         throw new Error("JCB is not a Car")
//     }
//   return (
//     <div>
//       {carName}
//     </div>
//   )
// }
import React from 'react'

const Car=({heroName})=> {
    if(heroName ==="Joker")
    {
        throw new Error("Not a hero");
    }
  return (
    <div>
      {heroName}
    </div>
  )
}
export default Car;
