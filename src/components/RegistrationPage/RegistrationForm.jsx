import React from 'react';
import { useForm } from 'react-hook-form';
import "./RegistrationForm.css"

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">NAME</label>
      <input type="text" placeholder="" {...register("Name", {max: 20, min: 3})} />
      <label htmlFor="email">EMAIL</label>
      <input type="text" placeholder="" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <label htmlFor="password">PASSWORD</label>
      <input type="text" placeholder="" {...register("Password", {max: 20, min: 8})} />
      <p>Forgot your password ?</p>
      <input type="submit" value="Register"/>
    </form>
  );
}