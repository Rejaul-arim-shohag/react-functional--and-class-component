import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
const axios = require('axios');

class User extends Component {
    constructor(){
        super()
        this.state = {
            todoList:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            this.setState({todoList:res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    render() {

        const editPost = (id)=>{
            const editpost = "Edit Post Of ID ="+id;
            alert(editpost)
        }
        const deletePost = (id)=>{
            const deletePost = "Delete Post Of ID ="+id;
            alert(deletePost)
        }
        const deatilPost = (id)=>{
            const detailsPost = "Detail Post Of Id ="+id;
            alert(detailsPost)
        }
        const myList = this.state.todoList.map((todo) => {
            return (
                <tr>
                    <td>{todo.userId}</td>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed?"true":"false"}</td>
                    <td><Button onClick={()=>{editPost(todo.id)}} variant="warning">Edit</Button></td>
                    <td><Button onClick={()=>{deletePost(todo.id)}} variant="danger">Delete</Button></td>
                    <td><Button onClick={()=>{deatilPost(todo.id)}} variant="success">Detail</Button></td>
                </tr>
            )
        });

        
        return (
            <div>
                <h1>its render from class component</h1>
                 <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>user id</th>
                        <th>id</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Delete</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {myList}
                </tbody>
            </Table>
            </div>
        );
    }
}

export default User;