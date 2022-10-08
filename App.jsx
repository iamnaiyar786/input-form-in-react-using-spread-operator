import React from 'react';
import { useState } from 'react';
import "./App.css";

const App =() =>{
    const[fullName, setFullName] = useState({
        fName :"",
        lName :"",
        email :"",
        phone :"",
    });
    const inputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        const {name,value} = event.target;
        setFullName((preValue) => {
            return {
                ...preValue,
                [name] : value,
                
            }
            // if(name === "fName"){
            //     return{
            //         fName:value,
            //         lName:preValue.lName,
            //         email:preValue.email,
            //         phone:preValue.phone,
            //     };
            // }else  if(name === "lName"){
            //     return{
            //         fName:preValue.fName,
            //         lName:value,
            //         email:preValue.email,
            //         phone:preValue.phone,
            //     };
            // }
            // else  if(name === "email"){
            //     return{
            //         fName:preValue.fName,
            //         lName:preValue.lName,
            //         email:value,
            //         phone:preValue.phone,
            //     };
            // }
            // else  if(name === "phone"){
            //     return{
            //         fName:preValue.fName,
            //         lName:preValue.lName,
            //         email:preValue.email,
            //         phone:value,
            //     };
            // }
        })
    }
    const submit = (event) =>{
        event.preventDefault();
        alert('form submitted');
    }
    
    return(
    <>
    
    <div className='main'>
    <form onSubmit={submit}>
        <div>
        <h1> Hello {fullName.fName} {fullName.lName} </h1>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>

        <input type="text" 
        placeholder='Enter First Your Name' 
        name='fname' 
        onChange={inputEvent} value={fullName.fname} />
        <input type="text" 
        placeholder='Enter Your Last Name' 
        name='lname' 
        onChange={inputEvent} value={fullName.lname} />
        <input type="email" 
        placeholder='Enter Your Email' 
        name='email' 
        onChange={inputEvent} value={fullName.email} />
        <input type="number" 
        placeholder='Enter Your Phone Number' 
        name='phone' 
        onChange={inputEvent} value={fullName.phone} />
        
        <button type='submit'>Submit</button>
        </div>
        </form>
    </div>
    
    </>
    );
}

export default App;