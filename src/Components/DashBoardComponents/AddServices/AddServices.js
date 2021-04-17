import React, { useContext, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const AddServices = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    
    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name]= e.target.value
        setInfo(newInfo)
    }

    const handleFileChange = e =>{
        const newFile = e.target.files[0]
        setFile(newFile)
    }

 const handleSubmit = (e) =>{
     e.preventDefault()
        const formData = new FormData()
        
        formData.append('name', info.name)
        formData.append('textArea', info.text)
        formData.append('price', info.price)
        formData.append('myFile', file)
      
        fetch('https://tech-solution-farhan.herokuapp.com/addAService', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          window.alert("New Service Added")
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
            
            <div className="d-flex justify-content-between pt-5 name">
                <h3>Add a Service</h3>
                 <h5>{loggedInUser.name}</h5>
            </div>
            
                <Form className="mt-5 pt-5 pb-5" onSubmit={handleSubmit}>      
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