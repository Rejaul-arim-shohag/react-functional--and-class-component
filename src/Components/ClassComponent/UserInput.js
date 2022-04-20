import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Userinput extends Component {
     myClick = ()=>{
         const text = this.myInput.value;
         alert(text);
         console.log("Click")
     }
     componentDidMount() {
         alert("Hello component did mount is the similer to useEffect")
     }
    render() {
        return (
            <div>
                <h1>This is simple Form of Class Component</h1>
                <Form>
                <Form.Control ref={(name)=>{this.myInput=name}} type="text" placeholder="Normal text" />
                </Form>
                <Button onClick={this.myClick}>Submit</Button>
            </div>
        );
    }
}

export default Userinput;
