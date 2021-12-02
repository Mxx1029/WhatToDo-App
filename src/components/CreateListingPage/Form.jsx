import "./Form.scss"
import React, { useState} from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { FaCloudUploadAlt } from "react-icons/fa";



export default function Form(){
    const [ listing, setListing] = useState({});
    const [ image, setImage] = useState({raw:"", preview:false});

    const changeHandler = (e) => {
        setListing({...listing, [e.target.name] : e.target.value})
    }

    const fileChangeHandler = (e) => {
        if(e.target.files.length){
            setImage({
                raw:e.target.files[0],
                preview: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let fd = new FormData();
        fd.append("name", listing.email);
        fd.append("address", listing.address);
        fd.append("categories", listing.categories)
        fd.append("summary", listing.summary);
        fd.append("description", listing.description);
        fd.append("price", listing.price);
        fd.append("bookingLink", listing.bookingLink);
        fd.append("website", listing.website);
        fd.append("email", listing.email);
        fd.append("phone", listing.phone);
        fd.append("instagram", listing.instagram);
        fd.append("facebook", listing.facebook);
        fd.append("file", image.raw, image.preview);



        axios({
            url: "http://localhost:5000/create-listing",
            method: "POST",
            data: fd,
            headers: {
                "Content-type":"multipart/formdata"
            }
        }).then(res => console.log(res))
          .catch(err => console.log(err))


    }


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return(
        <div className="form">
            <h1>CREATE LISTING</h1>
            <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Listing Name</label>
                    <input
                        type="text" 
                        {...register("Listing Name", {required: true, max: 50, min: 1})} 
                        id="name" 
                        name="name"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        {...register("Address", {required: true, max: 100, min: 3})} 
                        id="address" 
                        name="address"
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="categories">Categories</label>

                    <div className="container">
                        <input 
                            {...register("Categories", { required: true })} 
                            className="hide-box" 
                            id="1" type="radio" 
                            name="categories" 
                            value="Free" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="1" className="categ-radio">
                            <div className="display-box">
                                <div className="type">FREE</div>
                            </div>
                        </label>

                        <input 
                            {...register("Categories", { required: true })} 
                            className="hide-box" 
                            id="2" type="radio" 
                            name="categories" 
                            value=" Workshop" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="2" className="categ-radio">
                            <div className="display-box">
                                <div className="type">WORKSHOP</div>
                            </div>
                        </label>

                        <input 
                            {...register("Categories", { required: true })} 
                            className="hide-box" 
                            id="3" 
                            type="radio" 
                            name="categories" 
                            value=" Family" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="3" className="categ-radio">
                            <div className="display-box">
                                <div className="type">FAMILY</div>
                            </div>
                        </label>
                        <input 
                            {...register("Categories", { required: true })} 
                            className="hide-box" 
                            id="4" 
                            type="radio" 
                            name="categories" 
                            value=" Market"
                            onChange={changeHandler}
                        />
                        <label htmlFor="4" className="categ-radio">
                            <div className="display-box">
                                <div className="type">MARKET</div>
                            </div>
                        </label>

                        <input 
                            {...register("Categories", { required: true })} 
                            className="hide-box" 
                            id="5" type="radio" 
                            name="categories" 
                            value=" Food and Drinks"
                            onChange={changeHandler}
                        />
                        <label htmlFor="5" className="categ-radio">
                            <div className="display-box">
                                <div className="type">FOOD AND DRINKS</div>
                            </div>
                        </label>

                        <input 
                            {...register("Categories", { required: true })} 
                            className="hide-box"  
                            id="6" type="radio" 
                            name="categories" 
                            value=" Reading"
                            onChange={changeHandler}
                        />
                        <label htmlFor="6" className="categ-radio">
                            <div className="display-box">
                                <div className="type">READING</div>
                            </div>
                        </label>

                        <input 
                            {...register("Categories", { required: true })} 
                            className="hide-box" 
                            id="7" type="radio" 
                            name="categories" 
                            value="Exhibition" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="7" className="categ-radio">
                            <div className="display-box">
                                <div className="type">EXHIBITION</div>
                            </div>
                        </label>

                        <input 
                            {...register("Categories", { required: true })} 
                            className="hide-box" 
                            id="8" type="radio" 
                            name="categories" 
                            value=" Performing Arts"
                            onChange={changeHandler}
                        />
                        <label htmlFor="8" className="categ-radio">
                            <div className="display-box">
                                <div className="type">PERFORMING ARTS</div>
                            </div>
                        </label>

                        <input 
                            {...register("Categories", { required: true })} 
                            className="hide-box" 
                            id="9" type="radio" 
                            name="categories" 
                            value="Music" 
                            onChange={changeHandler}
                            />
                        <label htmlFor="9" className="categ-radio">
                            <div className="display-box">
                                <div className="type">MUSIC</div>
                            </div>
                        </label>

                        <input 
                            {...register("Categories", { required: true })} 
                            className="hide-box" 
                            id="10" type="radio" 
                            name="categories" 
                            value="Party"
                            onChange={changeHandler}
                        />
                        <label htmlFor="10" className="categ-radio">
                            <div className="display-box">
                                <div className="type">PARTY</div>
                            </div>
                        </label>

                        <input 
                            {...register("Categories", { required: true })} 
                            className="hide-box" 
                            id="11" 
                            type="radio" 
                            name="categories" 
                            value="Opening"
                            onChange={changeHandler}
                        />
                        <label htmlFor="11" className="categ-radio">
                            <div className="display-box">
                                <div className="type">OPENING</div>
                            </div>
                        </label>

                        <input 
                            {...register("Categories", { required: true })} 
                            className="hide-box" 
                            id="12" type="radio" 
                            name="categories" 
                            value="Film"
                            onChange={changeHandler}
                            />
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
                    <textarea 
                        className="summary" 
                        {...register("Summary", {required: true, max: 100, min: 3})} 
                        id="summary"
                        name="summary"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea 
                        className="description" 
                        {...register("Description", {required: true, max: 1000, min: 3})} 
                        id="description" 
                        name="description"
                        onChange={changeHandler}
                    />
                </div>

                <h2>DATE AND TIME</h2>
                <div>
                    <label htmlFor="start">When does the event start?</label>
                    <input 
                        type="date" 
                        {...register("Start date", {required: true})} 
                        name="start-date" 
                        id="start"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="end">When does the event end?</label>
                    <input 
                        type="date" 
                        {...register("End date", {required: true})} 
                        name="end-date" 
                        id="end"
                        onChange={changeHandler}
                    />
                </div>
                {/* <div>
                    <label htmlFor="occurs">How often does it occur?</label>
                </div> */}
                <div>
                    <label htmlFor="time-start">What time does the event start?</label>
                    <input 
                        type="time" 
                        {...register("time", {required: true})} 
                        name="time" 
                        id="time-start"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="time-end">What time does the event end?</label>
                    <input 
                        type="time" 
                        {...register("time", {required: true})} 
                        name="time" 
                        id="time-end"
                        onChange={changeHandler}
                    />
                </div>

                <h2>PRICES AND BOOKING</h2>
                <div>
                    <label htmlFor="free">Is this a free event or tour ?</label>
                    <div className="container">
                        <input 
                            {...register} 
                            className="hide-box" 
                            id="yes-free" 
                            type="radio" 
                            value="yes " 
                            name="free" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="yes-free" className="free-radio">
                            <div className="display-box">
                                <div className="free">YES</div>
                            </div>
                        </label>

                        <input 
                            {...register} 
                            className="hide-box" 
                            id="no-free" 
                            type="radio" 
                            value=" no" 
                            name="free" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="no-free" className="free-radio">
                            <div className="display-box">
                                <div className="free">NO</div>
                            </div>
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input 
                        type="number" 
                        {...register("Price", {})} 
                        id="price" 
                        name="price"
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="bookings">Are bookings required?</label>
                    <div className="container">
                        <input 
                            {...register} 
                            className="hide-box" 
                            id="yes-booking" 
                            type="radio" 
                            value="yes " 
                            name="booking"
                            onChange={changeHandler}
                        />
                        <label htmlFor="yes-booking" className="booking-radio">
                            <div className="display-box">
                                <div className="booking">YES</div>
                            </div>
                        </label>

                        <input 
                            {...register} 
                            className="hide-box" 
                            id="no-booking" 
                            type="radio" 
                            value=" no" 
                            name="booking"
                            onChange={changeHandler}
                        />
                        <label htmlFor="no-booking" className="booking-radio">
                            <div className="display-box">
                                <div className="booking">NO</div>
                            </div>
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="bookingLink">Booking link</label>
                    <input 
                        type="text" 
                        {...register("Booking link", {})} 
                        id="bookingLink" 
                        name="bookingLink"
                        onChange={changeHandler}
                    />
                </div>
                

                <h2>CONTACT DETAILS</h2>
                <div>
                    <label htmlFor="website">Website</label>
                    <input 
                        type="text" 
                        {...register("Website", {min: 5})} 
                        id="website" 
                        name="website"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} 
                        id="email" 
                        name="email"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="tel" 
                        {...register("Phone", {required: true, minLength: 6, maxLength: 25})} 
                        id="phone" 
                        name="phone"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="instagram">Instagram</label>
                    <input 
                        type="text" 
                        {...register("Instagram", {min: 3})} 
                        id="instagram" 
                        name="instagram"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="facebook">Facebook</label>
                    <input 
                        type="text" 
                        {...register("Facebook", {min: 3})} 
                        id="facebook" 
                        name="facebook"
                        onChange={changeHandler}
                    />
                </div>
               
      

                <h2>ADD IMAGE</h2>
                <div className='file'>
                    
                    <label htmlFor='input-file'>
                        {image.preview 
                            ?  <img src={image.preview} alt="event-picture" className="event-picture" />
                            : <div><FaCloudUploadAlt className="upload-icon" />Select an image</div>
                        }
                    </label>
                    <input 
                        id='input-file' 
                        type='file' 
                        name="file"
                        // name="uploaded_image"
                        onChange={fileChangeHandler}
                    />
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