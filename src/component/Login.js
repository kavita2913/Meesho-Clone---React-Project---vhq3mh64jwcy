
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Login.css'
import { useContext } from "react";
import {DataAppContext} from './Context'
function Login() {
  const cart = useContext(DataAppContext)
  const {setLoginStatus} =cart
 
  const[logindetails,setLoginDetails]=useState({
    username:'',
    pwd:''
  })

  const justCheck =()=>{
     let dlt =JSON.parse(localStorage.getItem('users'))
    
   dlt && dlt.map((item)=>{
           if(item.email === logindetails.username && item.password ===logindetails.pwd){
           
            setLoginStatus(true)
           }
          
          
    })
  
     

 
  }
  return (
   <>
  
      <div className='login_cmp'>
        <div className="login_username">
            <p className='lgcpmov'>Email:</p>
           <input type="text" placeholder='enter your email' className='lgcpmov' onChange={(e)=>{setLoginDetails({...logindetails,
           username:e.target.value
           })}}/>
        </div>
          <div className="login_password">
             <p className='lgcpmov'>Password</p>
             <input type="password" placeholder='enter your password' className='lgcpmov' onChange={(e)=>
           {setLoginDetails({
              ...logindetails,
              pwd:e.target.value

             })}}/>
        </div>
         <div className="login_button">
           <Link to={'/'} style={{textDecoration:'none'}}><button className='lgcpmov' onClick={justCheck}>Login</button></Link> 
         </div>

         <div className="login_forget_password">
            <p className='lgcpmov'>Forget Password</p>
          <Link to={'/signup'}> <p className='lgcpmov'>Create New Account</p></Link> 
         </div>
    </div>
   </>
  )
}

export default Login
