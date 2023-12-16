import React, { Component } from 'react'

export default class ComponentLifeCycle extends Component {
    constructor(props)
    {
        super(props);
        this.state={favColor:"yellow"}
    }
    componentDidMount()//to update the component
    {
        setTimeout(()=>{this.setState({favColor:"blue"})},5000)
    }
    shouldComponentUpdate()//to say whether the component to update or not
    {
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)//to get previous state of the value
    {
        document.getElementById("id1").innerHTML="Previous value "+prevState.favColor;
    }
    componentDidUpdate()
    {
        document.getElementById("id2").innerHTML="Current value "+this.state.favColor;
    }
    
    render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favColor}</h1>
        <p id="id1"></p>
        <p id="id2"></p>
      </div>
    )
  }
}
