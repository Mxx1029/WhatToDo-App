import "./Form.scss"
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaCloudUploadAlt } from "react-icons/fa";



export default function Form(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return(
        <div className="form">
            <h1>CREATE LISTING</h1>
            <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Listing Name</label>
                    <input type="text" {...register("Listing Name", {required: true, max: 100, min: 1})} />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" {...register("Address", {required: true, max: 100, min: 3})} />
                </div>

                <div>
                    <label htmlFor="categories">Categories</label>

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
                    <label htmlFor="summary">Summary</label>
                    <p>This brief overview of your listing will appear in search results.</p>
                    <textarea className="summary" {...register("Summary", {required: true, max: 100, min: 3})} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea className="description" {...register("Description", {required: true, max: 1000, min: 3})} />
                </div>

                <h2>DATE AND TIME</h2>
                <div>
                    <label htmlFor="starts">When does the event start?</label>
                    <input type="date" {...register("Start date", {required: true})} name="start-date" id="start-date"/>
                </div>
                <div>
                    <label htmlFor="ends">When does the event end?</label>
                    <input type="date" {...register("End date", {required: true})} name="end-date" id="end-date"/>
                </div>
                {/* <div>
                    <label htmlFor="occurs">How often does it occur?</label>
                </div> */}
                <div>
                    <label htmlFor="time">What time does the event start?</label>
                    <input type="time" {...register("time", {required: true})} name="time" id="time"/>
                </div>
                <div>
                    <label htmlFor="time">What time does the event end?</label>
                    <input type="time" {...register("time", {required: true})} name="time" id="time"/>
                </div>

                <h2>PRICES AND BOOKING</h2>
                <div>
                    <label htmlFor="free">Is this a free event or tour ?</label>
                    <div className="container">
                        <input {...register} className="hide-box" id="yes-free" type="radio" value="yes " name="free"/>
                        <label htmlFor="yes-free" className="free-radio">
                            <div className="display-box">
                                <div className="free">YES</div>
                            </div>
                        </label>

                        <input {...register} className="hide-box" id="no-free" type="radio" value=" no" name="free"/>
                        <label htmlFor="no-free" className="free-radio">
                            <div className="display-box">
                                <div className="free">NO</div>
                            </div>
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" {...register("Price", {})} />
                </div>

                <div>
                    <label htmlFor="bookings">Are bookings required?</label>
                    <div className="container">
                        <input {...register} className="hide-box" id="yes-booking" type="radio" value="yes " name="booking"/>
                        <label htmlFor="yes-booking" className="booking-radio">
                            <div className="display-box">
                                <div className="booking">YES</div>
                            </div>
                        </label>

                        <input {...register} className="hide-box" id="no-booking" type="radio" value=" no" name="booking"/>
                        <label htmlFor="no-booking" className="booking-radio">
                            <div className="display-box">
                                <div className="booking">NO</div>
                            </div>
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="booking-link">Booking link</label>
                    <input type="text" {...register("Booking link", {})} />
                </div>
                

                <h2>CONTACT DETAILS</h2>
                <div>
                    <label htmlFor="website">Website</label>
                    <input type="text" {...register("Website", {min: 5})} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" {...register("Phone", {required: true, minLength: 6, maxLength: 25})} />
                </div>
                <div>
                    <label htmlFor="instagram">Instagram</label>
                    <input type="text" {...register("Instagram", {min: 3})} />
                </div>
                <div>
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text" {...register("Facebook", {min: 3})} />
                </div>
               
      

                <h2>ADD IMAGE</h2>
                <div className='file'>
                    <label htmlFor='input-file'>
                        <FaCloudUploadAlt className="upload-icon" />
                        Select an image
                    </label>
                    <input id='input-file' type='file' name="uploaded_image"/>
                </div>


                <h2>REVIEW AND SUBMIT</h2>

                <p>Please review your listing before you submit and ensure it meets our guidelines.</p>
                <p>We'll review your listing and let you know the outcome by email.</p>


                {/* <button>REVIEW</button>
                <button>SAVE DRAFT</button> */}


                <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    )
}