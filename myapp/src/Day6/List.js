export default function List() {
    const animals=["dog","cat","donkey","lion"]
    const result=animals.map((ani,index)=><li key={index}>{index} => {ani}</li>)  
    return (
    <div>
      <ul type="square">{result}</ul>
    </div>
  )
}
