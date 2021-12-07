import axios from 'axios';
import React, {useState} from 'react';
// import { useForm } from 'react-hook-form';
import "./RegistrationForm.scss";

export default function RegistrationForm() {
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  const [myError, setMyError] = useState("")

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
      ...user, [name]: value
    })
  }

  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);
  // console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const {name, email, password} = user
    if(name && email && password){
       axios.post("http://localhost:3001/users/", user)
       .then(response => setMyError(response.data.error))
      
    } else {
      alert("invalid input")
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label htmlFor="name">NAME</label>
      <input 
        type="text"  
        name="name"
        value={user.name}
        onChange={handleChange}
        // {...register("Name", {max: 20, min: 3})} 
      />
      <label htmlFor="email">EMAIL</label>
      <input 
        type="text" 
        name="email"
        value={user.email}
        onChange={handleChange}
        // {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} 
      />

      <span>{myError ? myError : null }</span>

      <label htmlFor="password">PASSWORD</label>
      <input 
        type="password" 
        name="password"
        value={user.password}
        onChange={handleChange}
        // {...register("Password", {max: 20, min: 8})} 
      />

      <p>Forgot your password ?</p>

      {}

      <input type="submit" value="Register"/>
    </form>
  );
}