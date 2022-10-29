import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [credentials, setcredantial] = useState({email:'',password:'',username:''});
   let navigate = useNavigate()

  const login=async(e)=>{
    // e.preventDefault()
    if(credentials.email.length)
    {
        var t = credentials;
        delete t.username
        setcredantial(t)
    }
    else if (!credentials.email.length){
        var t = credentials;
        delete t.email
        setcredantial(t)
    }
  
   await axios.post('http://localhost:3002/products/login',credentials).then((resp)=>{
        
        localStorage.setItem('resp',JSON.stringify(resp.data))
    }).catch(err=>console.log(err))

    navigate('/products')
  }
  

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      
        <label>
          <p>Username Or mail</p>
          <input type="text" onChange={e =>  {
            if(e.target.value.includes('@')){setcredantial({...credentials,email:e.target.value})}
             else{setcredantial({...credentials,username:e.target.value})} }}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setcredantial({...credentials,password:e.target.value})}/>
        </label>
        <div>
          <button  onClick={()=>login()}>Submit</button>
        </div>
      
    </div>
  )
}

