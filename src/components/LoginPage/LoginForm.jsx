import React, { useState } from 'react';
import axios from 'axios';
// import { useForm } from 'react-hook-form';
import "./LoginForm.scss"
import LandingPage from '../LandingPage/LandingPage';
// import {useHistory} from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function LoginForm() {
  const [user, setUser] = useState({
    name:" ",
    password:" "
  })

  const [loginStatus, setLoginStatus] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
      ...user, [name]: value
    })
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("user is logged in")
    const headers = { "Content-Type": "application/json"}

    axios.post("http://localhost:3001/users/login", user, headers)
        .then(response => {
          console.log(response.data)
          if(response.status == 200){
            localStorage.setItem("isLogin", true)
            navigate("/")
            return console.log("test")
          }
          console.log("bad request")
          // if (response.data.message) {
          //  setLoginStatus(response.data.status);
          // } else {
          //   // setLoginStatus(response.data.name);
          //   // props.setUser(response.data)
          // }   
        })
    }

    // if(loginStatus && loginStatus !== "error") {
    //     return ( 
    //       < LandingPage />)
    // }         



  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);
  // console.log(errors);
  
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">EMAIL</label>
      <input 
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        // {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} 
      />

      <label htmlFor="password">PASSWORD</label>
      <input 
        type="password" 
        name="password"
        value={user.password}
        onChange={handleChange}
        // {...register("Password", {max: 20, min: 8})} 
      />

      <p>Forgot your password ?</p>

      <input type="submit" value="Log in"/>
    </form>
  );
}