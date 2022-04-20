import React, {useState, useEffect } from 'react';
const axios = require('axios');

const HomeBanner2 = () => {
    // useEffect(() =>{
    //    axios.get("https://jsonplaceholder.typicode.com/posts")
    //    .then((res)=>{
    //        alert(res.status)
    //     alert(res.data)
    //    })
    //    .catch((err)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log("No error finding Here")
    //     }
    //    })
    // })
    

    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    })
    return (
        <div>
           <p>You clicked {count} times</p>
           <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    );
};

export default HomeBanner2;