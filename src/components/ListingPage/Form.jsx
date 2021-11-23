import "./Form.scss"
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return(
        <div className="form">
            <h1>CREATE LISTING</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Listing Name</label>
                    <input type="text" placeholder="Listing Name" {...register("Listing Name", {required: true, max: 100, min: 1})} />
                </div>
                <div>
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="Address" {...register("Address", {required: true, max: 100, min: 3})} />
                </div>
                <div>
                    <label htmlFor="">Categories</label>
                </div>

                <h2>DESCRIPTION</h2>
                <div>
                    <label htmlFor="">Summary</label>
                    <textarea {...register("Summary", {required: true, max: 50, min: 3})} />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <textarea {...register("Description", {required: true, max: 200, min: 3})} />
                </div>

                <h2>DATE AND TIME</h2>
                <div>
                    <label htmlFor="">When does the event start?</label>
                </div>
                <div>
                    <label htmlFor="">When does the event end?</label>
                </div>
                <div>
                    <label htmlFor="">How often does it occur?</label>
                </div>
                <div>
                    <label htmlFor="">What time is the event?</label>
                </div>

                <h2>PRICES AND BOOKING</h2>
                <div>
                    <label htmlFor="">Is this a free event or tour ?</label>
                </div>
                <div>
                    <label htmlFor="">Price</label>
                </div>
                <div>
                    <label htmlFor="">Are bookings required?</label>
                </div>
                <div>
                    <label htmlFor="">Booking link</label>
                </div>
                

                <h2>CONTACT DETAILS</h2>
                <div>
                    <label htmlFor="">Website</label>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                </div>
                <div>
                    <label htmlFor="">Instagram</label>
                </div>
                <div>
                    <label htmlFor="">Facebook</label>
                </div>

                <h2>ADD IMAGE</h2>


                <h2>REVIEW</h2>

                <p>Please review your listing, save or submit!</p>


                <input type="submit" />
            </form>
        </div>
    )
}