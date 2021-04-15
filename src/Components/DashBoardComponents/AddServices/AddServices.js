import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';

const AddServices = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)
    console.log(info);
    console.log(file);

    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name]= e.target.value
        setInfo(newInfo)
    }

    const handleFileChange = e =>{
        const newFile = e.target.files[0]
        setFile(newFile)
    }

 const handleSubmit = () =>{
        const formData = new FormData()
        
        formData.append('name', info.name)
        formData.append('textArea', info.text)
        formData.append('price', info.price)
        formData.append('myFile', file)
      
        fetch('http://localhost:5000/addAService', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
     }
    
    return (
        <section className="row">
            <Col md={2}>
                 <SideBar />
            </Col>
        <Col md={10} className=" bg-light" style={{ position: "absolute", right: 0 }}>
            <h5 className="name">Add a Service</h5>
                <Form className="mt-5" onSubmit={handleSubmit}>
                    
                    <Form.Group controlId="formBasicName">
                        <Form.Control onBlur={handleBlur} type="text" name='name' placeholder="Enter Service Name*" required/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea">
                            <Form.Control onBlur={handleBlur} as="textarea" rows={3}  name = 'text' placeholder="Enter Service Description*"  required/>
                        </Form.Group>

                        <div className="d-flex justify-content-between">
                                <Form.Group controlId="formBasicPrice">
                                <Form.Control onBlur={handleBlur} type="number" name='price'  placeholder="Enter Service Price*" required/>
                            </Form.Group>


                            <Form.Group  controlId="formBasicFile">
                                <Form.Control onChange={handleFileChange} name="file" type="file" required />
                            </Form.Group>
                        </div>
                    
                    <Button variant="danger" type="submit" className="float-right btn-brand"> Submit</Button>
            </Form>
        </Col>
    </section>
    );
};

export default AddServices;