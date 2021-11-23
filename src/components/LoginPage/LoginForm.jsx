import React from 'react';
import { useForm } from 'react-hook-form';
import "./LoginForm.css"

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">EMAIL</label>
      <input type="text" placeholder="" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <label htmlFor="password">PASSWORD</label>
      <input type="text" placeholder="" {...register("Password", {max: 20, min: 8})} />
      <p>Forgot your password ?</p>
      <input type="submit" value="Log in"/>
    </form>
  );
}