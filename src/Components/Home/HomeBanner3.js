import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
const axios = require('axios');
const HomeBanner3 = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => {
                setTodos(res.data)
               console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, []);

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
    const myList = todos.map((todo) => {
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
};

export default HomeBanner3;