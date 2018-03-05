// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';



// // class App extends React.Component {
// //    constructor(props) {
// //       super(props);
// /*example-1
//       this.state = {
//          data: 0
//       }
//       this.setNewNumber = this.setNewNumber.bind(this)
//    };
//    setNewNumber() {
//       this.setState({data: this.state.data + 1})
//    }
//    render() {
//       return (
//          <div>
//             <button onClick = {this.setNewNumber}>INCREMENT</button>
//             <Content myNumber = {this.state.data}></Content>
//          </div>
//       );
//    }
// }
// export default App;
// */
// /* example-2
// this.state = {
//     data: 'Initial data...'
//  }
//  this.updateState = this.updateState.bind(this);
// };
// updateState(e) {
//  this.setState({data: e.target.value});
// }
// render() {
//  return (
//     <div>
//        <input type = "text" value = {this.state.data}
//           onChange = {this.updateState} />
//        <h4>{this.state.data}</h4>
//     </div>
//  );
// }
// }

// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <h3>{this.props.myNumber}</h3>
//          </div>
//       );
//    }
// }
// export default App;
// */

// /*example-3
// this.state = {
//     data: 'Initial data...'
//  }
//  this.updateState = this.updateState.bind(this);
// };
// updateState() {
//  this.setState({data: 'Data updated...'})
// }
// render() {
//  return (
//     <div>
//        <button onClick = {this.updateState}>CLICK</button>
//        <h4>{this.state.data}</h4>
//     </div>
//  );
// }
// }
// export default App;
// */
// var newData = {
//     data: 'Data from HOC...',
//  }

//  var MyHOC = ComposedComponent => class extends React.Component {

//     componentDidMount() {
//        this.setState({
//           data: newData.data
//        });
//     }

//     render() {
//        return <ComposedComponent {...this.props} {...this.state} />;
//     }
//  };


//  class MyComponent extends React.Component {
//     render() {
//        return (
//           <div>
//              <h1>{this.props.data}</h1>
//           </div>
//        )
//     }
//  }

//  export default MyHOC(MyComponent);

import React, { Component } from 'react';
import Text from "./Text";
import Name from "./Name";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'HELLOo'
        }
    }

    changeText = (text) => {
        this.setState({
            name: text
        })


    }
    render() {
        return(
            <div>
            <Text changeText={this.changeText} />
            <Name name={this.state.name }/>
            </div>
        );
    }

}
