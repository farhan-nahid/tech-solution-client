import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';


const Review = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    
    const onSubmit = (data, e) => {
       
        const testimonial= {...data, ...loggedInUser}
        console.log(testimonial)
      
        const url=' https://tech-solution-farhan.herokuapp.com/addReview'
        fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type':'Application/json'
        },
             body:JSON.stringify(testimonial)
        })
        .then(res=>console.log("server site", res))
        window.alert("review added") 
    };

    return (
        <section>
            <Row>
                <Col md={2}>
                    <SideBar />
                </Col>
                <Col md={10}  className=" bg-light" style={{ position: "absolute", right: 0 }}>
                <div className=" d-flex justify-content-between pt-5 name">
                        <h3>Say Something About Us</h3>
                        <h5>{loggedInUser.name}</h5>
                    </div>
                <form onSubmit={handleSubmit(onSubmit)}  className="pt-5 pb-5">
                    
                    <label htmlFor="" >Your Name</label> <br/>
                    <input {...register("name", { required: true })} value={loggedInUser.name} placeholder="Enter Your Name" className="form-control"  />  <br/>
                    {errors.name && <span>This field is required</span>}

                    <label htmlFor=""  className="mt-4">Your Company Name</label> <br/>
                    <input {...register("companyName", { required: true })} placeholder="Enter Your Company Name" className="form-control" /> <br/>
                    {errors.companyName && <span>This field is required</span>} 

                    <label htmlFor=""  className="mt-4">Your Review</label> <br/>
                    <input {...register("description", { required: true })} type="textarea" row={5} placeholder="Enter Your Review" className="form-control" /> <br/> <br/> 
                    {errors.description && <span>This field is required</span>}
                    <input type="submit" className="btn btn-danger btn-brand"  />
                 </form>
                </Col>
            </Row>
        </section>
    );
};

export default Review;