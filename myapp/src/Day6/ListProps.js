function DisplayName(props) {
  return (
    <div>
        {props.name}
    </div>
  )
}


export default function ListProps() {
    const students=["Deepak","Dhanu","Jaisuryah"]
    const sName=students.map((stu)=><DisplayName name={stu}/>)
  return (
    <div>
      {sName}
    </div>
  )
}
