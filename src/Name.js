import React,{ Component } from 'react'


export default class Name extends Component {
    constructor(props) {
        super(props);
    }
render() {
    return(
        <div>
            <h1>Name: {this.props.name}</h1>
        </div>
    )
}
}
