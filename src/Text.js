import React from 'react'

export default class Text extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        text:""
    }
}

changeText = (e) => {
    var text = e.target.value;
    console.log(text);
    this.setState({
        text: text
    })
}

clickButton = (f) => {
    this.props.changeText(this.state.text);
}
render() {
    return(
        <div>
            <input type="text" onChange={(event) => this.changeText(event)} />
            <button onClick={(event) => this.clickButton(event)}>Click</button>
        </div>
    )
}
}
