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
            <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Listing Name</label>
                    <input type="text" {...register("Listing Name", {required: true, max: 100, min: 1})} />
                </div>
                <div>
                    <label htmlFor="">Address</label>
                    <input type="text" {...register("Address", {required: true, max: 100, min: 3})} />
                </div>

                <div>
                    <label htmlFor="">Categories</label>

                    <div className="container">
                        <input {...register("Categories", { required: true })} className="hide-box" id="1" type="radio" name="categories" value="Free" />
                        <label htmlFor="1" className="categ-radio">
                            <div className="display-box">
                                <div className="type">FREE</div>
                            </div>
                        </label>

                        <input {...register("Categories", { required: true })} className="hide-box" id="2" type="radio" name="categories" value=" Workshop" />
                        <label htmlFor="2" className="categ-radio">
                            <div className="display-box">
                                <div className="type">WORKSHOP</div>
                            </div>
                        </label>

                        <input {...register("Categories", { required: true })} className="hide-box" id="3" type="radio" name="categories" value=" Family" />
                        <label htmlFor="3" className="categ-radio">
                            <div className="display-box">
                                <div className="type">FAMILY</div>
                            </div>
                        </label>
                        <input {...register("Categories", { required: true })} className="hide-box" id="4" type="radio" name="categories" value=" Market" />
                        <label htmlFor="4" className="categ-radio">
                            <div className="display-box">
                                <div className="type">MARKET</div>
                            </div>
                        </label>

                        <input {...register("Categories", { required: true })} className="hide-box" id="5" type="radio" name="categories" value=" Food and Drinks" />
                        <label htmlFor="5" className="categ-radio">
                            <div className="display-box">
                                <div className="type">FOOD AND DRINKS</div>
                            </div>
                        </label>

                        <input {...register("Categories", { required: true })} className="hide-box"  id="6" type="radio" name="categories" value=" Reading" />
                        <label htmlFor="6" className="categ-radio">
                            <div className="display-box">
                                <div className="type">READING</div>
                            </div>
                        </label>

                        <input {...register("Categories", { required: true })} className="hide-box" id="7" type="radio" name="categories" value=" Opening, Exhibition" />
                        <label htmlFor="7" className="categ-radio">
                            <div className="display-box">
                                <div className="type">EXHIBITION</div>
                            </div>
                        </label>

                        <input {...register("Categories", { required: true })} className="hide-box" id="8" type="radio" name="categories" value=" Performing Arts, Film" />
                        <label htmlFor="8" className="categ-radio">
                            <div className="display-box">
                                <div className="type">PERFORMING ARTS</div>
                            </div>
                        </label>

                        <input {...register("Categories", { required: true })} className="hide-box" id="9" type="radio" name="categories" value="Music" />
                        <label htmlFor="9" className="categ-radio">
                            <div className="display-box">
                                <div className="type">MUSIC</div>
                            </div>
                        </label>

                        <input {...register("Categories", { required: true })} className="hide-box" id="10" type="radio" name="categories" value="Party" />
                        <label htmlFor="10" className="categ-radio">
                            <div className="display-box">
                                <div className="type">PARTY</div>
                            </div>
                        </label>

                        <input {...register("Categories", { required: true })} className="hide-box" id="11" type="radio" name="categories" value="Opening" />
                        <label htmlFor="11" className="categ-radio">
                            <div className="display-box">
                                <div className="type">OPENING</div>
                            </div>
                        </label>

                        <input {...register("Categories", { required: true })} className="hide-box" id="12" type="radio" name="categories" value="Film" />
                        <label htmlFor="12" className="categ-radio">
                            <div className="display-box">
                                <div className="type">FILM</div>
                            </div>
                        </label>
                    </div>

                </div>

                <h2>DESCRIPTION</h2>
                <div>
                    <label htmlFor="">Summary</label>
                    <p>This brief overview of your listing will appear in search results.</p>
                    <textarea className="summary" {...register("Summary", {required: true, max: 100, min: 3})} />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <textarea className="description" {...register("Description", {required: true, max: 1000, min: 3})} />
                </div>

                <h2>DATE AND TIME</h2>
                <div>
                    <label htmlFor="">When does the event start?</label>
                    <input type="datetime" placeholder="Start date" {...register("Start date", {required: true})} />
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
                    <input {...register} type="radio" value="yes " name="free"/>
                    <input {...register} type="radio" value=" no" name="free"/>
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" {...register("Price", {})} />

                </div>
                <div>
                    <label htmlFor="">Are bookings required?</label>
                    <input {...register} type="radio" value="yes " name="booking"/>
                    <input {...register} type="radio" value=" no" name="booking"/>
                </div>
                <div>
                    <label htmlFor="">Booking link</label>
                    <input type="text" {...register("Booking link", {})} />
                </div>
                

                <h2>CONTACT DETAILS</h2>
                <div>
                    <label htmlFor="">Website</label>
                    <input type="text" {...register("Website", {min: 5})} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="tel" {...register("Phone", {required: true, minLength: 6, maxLength: 12})} />
                </div>
                <div>
                    <label htmlFor="">Instagram</label>
                    <input type="text" {...register("Instagram", {min: 3})} />
                </div>
                <div>
                    <label htmlFor="">Facebook</label>
                    <input type="text" {...register("Facebook", {min: 3})} />
                </div>
               
      
      
      
      

                <h2>ADD IMAGE</h2>
                <input type="file" name="uploaded_image" />


                <h2>REVIEW</h2>

                <p>Please review your listing, save or submit!</p>


                <input type="submit" />
            </form>
        </div>
    )
}