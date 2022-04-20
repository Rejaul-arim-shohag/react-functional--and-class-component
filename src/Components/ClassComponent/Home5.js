import React, { Component } from 'react';

class Home5 extends Component {
    constructor() {
        super();
        this.state={color:"Green"}
    }
    render() {
        return (
            <div>
                {/* <h1>This is home Banner 5 and it is a class component</h1>
                <h1>{this.props.name}</h1>
                <h3>{this.props.age}</h3>
                <h1>{this.state.color}</h1>
                <button onClick={()=>this.setState({color:"Red"})}>Red</button>
                <button onClick={()=>this.setState({color:"Green"})}>Green</button>
                <button onClick={()=>this.setState({color:"blue"})}>blue</button>

                {/* conditional rendering */}
                {/* {this.state.color==="Green"?<h1>This is Green</h1>:<h1>This is another color</h1>} */} 
            </div>
        );
    }
}

export default Home5;