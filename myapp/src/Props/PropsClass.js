import React, { Component } from 'react'

class PropsClass extends Component
{
    render()
    {
        return( 
            <div>
                <h1><b>I am studying at {this.props.college}</b></h1>
            </div>
    )
    }
}
export default PropsClass;