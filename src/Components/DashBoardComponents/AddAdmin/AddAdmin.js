import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';

const AddAdmin = (e) => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
//         const admin = {
//           email:e.target.email,
// }
// const url='http://localhost:5000/addAdmin'
// fetch(url,{
//   method: 'POST',
//   headers:{
//     'Content-Type':'Application/json'
//   },
//   body:JSON.stringify(admin)
// })
// .then(res=>console.log("server site", res))
// window.alert("admin added")
};


    return (
        <section>
            <Row>
                <Col md={2}>
                    <SideBar />
                </Col>
                <Col md={10} className=" bg-light" style={{ position: "absolute", right: 0 }}>
                <h5 className="name">Add more Admin</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
                        <input {...register("exampleRequired", { required: true })} type="email" placeholder="Enter Admin Email" style={{width:'350px'}} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" className=" btn btn-brand"  value="Add Admin" />
                    </form>
                </Col>
            </Row>            
        </section>
    );
};

export default AddAdmin;