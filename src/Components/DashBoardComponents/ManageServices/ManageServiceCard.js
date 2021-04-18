import React from 'react';
import { Col } from 'react-bootstrap';
import cross from "../../../img/cross-removebg-preview.png";
import './ManageServiceCard.css';

const ManageServiceCard = ({service}) => {


  const handleDelete = (id,event) => {
    fetch(`https://tech-solution-farhan.herokuapp.com/serviceDelete/${id}`,{
        method : 'DELETE'
    })
    .then(res => res.json())
    .then(result =>{
        if(result){
            event.target.parentNode.style.display="none"
        }
    })
    window.alert("Service is Deleted")
}

    return (
        <Col md={5}  className="order-details ">
                    <img src={cross} className="float-right delete " alt="..." onClick={(event)=>handleDelete(service._id,event)} />
        <div  className="order">
            <div  className="img">
            <img  src={`data:image/png;base64,${service.image.img}`}/>
            </div>
            <div className="ml-3 details">
                <h5>Name : {service.name} </h5>
                <h6> Policy : {service.textArea}</h6>
            </div>
        </div>  
     </Col>
    );
};

export default ManageServiceCard;