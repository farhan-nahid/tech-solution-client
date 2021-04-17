import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const AddAdmin = (e) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit,  formState: { errors } } = useForm();
    
    const onSubmit = (data, e) => {
        const admin = {
           email:data.email,
        }
        const url='http://localhost:5000/addAdmin'
        fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type':'Application/json'
        },
             body:JSON.stringify(admin)
        })
        .then(res=>console.log("server site", res))
        window.alert("admin added")
    };


    return (
        <section className>
            <Row>
                <Col md={2}>
                    <SideBar />
                </Col>
                <Col md={10} className=" bg-light" style={{ position: "absolute", right: 0 }}>
                    <div className=" d-flex justify-content-between pt-5 name">
                        <h3>Add more Admin</h3>
                        <h5>{loggedInUser.name}</h5>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5  pt-5 pb-5">
                        <input {...register("email", { required: true })} type="email"  placeholder="Enter Admin Email" style={{width:'350px'}} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        <input type="submit" className=" btn btn-brand"  value="Add Admin" />
                    </form>
                </Col>
            </Row>            
        </section>
    );
};

export default AddAdmin;