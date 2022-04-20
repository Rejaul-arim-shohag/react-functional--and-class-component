import React, { useState, useRef } from 'react';

const HomeBanner = () => {
    const inputEl = useRef("hello");
    const passRef = useRef();
    const nameRef = useRef()
    const onButtonClick = ()=>{
        const namevalue = inputEl.current.value;
        const passValue = passRef.current.value;
        console.log(nameRef.current.name)
        console.log(nameRef)
        
        alert(namevalue)
        alert(passValue)
    }
    return (
        <div>
           <input ref={inputEl} type="text" name="" id="" />
           <input ref={passRef} type="password" name="" id="" />
           <input ref={nameRef} type="text" id="fname" name="fname" />
           <button onClick={onButtonClick}>Focus</button>
          
         {/* check value */}
         
        </div>
    );
};

export default HomeBanner;
