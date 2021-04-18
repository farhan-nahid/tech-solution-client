import { faCommentDots, faPlus, faShoppingBag, faShoppingCart, faSignOutAlt, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import title from '../../../img/tech-solution.png';
import './SideBar.css';

const SideBar = () => {

    const [loggedInUser, setLoggedInUser, ] = useContext(UserContext);
    const[isAdmin, setIsAdmin] = useState(false)
    

    useEffect(()=>{
        fetch('https://tech-solution-farhan.herokuapp.com/isAdmin',{
            method: 'POST',
            headers:{'Content-Type' : 'Application/json'},
            body :JSON.stringify({email : loggedInUser.email})
        })
        .then(res => res.json())
        .then(data=>setIsAdmin(data))
    },[loggedInUser])


    const handelSignOut= () => {
        firebase.auth().signOut()
        .then(res =>{
            const signOutUser = { 
                loggedInUser:false,
                name:""
            }
            setLoggedInUser(signOutUser)
        })
        .catch(err=>{
  
        })
    }

    return (
        <section className="sidebar d-flex flex-column  col-md-2 pb-3 " style={{height:"100vh"}}>
           <Link to="/"> 
                <img className="img-fluid" src={title} alt="..."/>
            </Link>
        <ul className="list-unstyled">
                    <li>
                        <Link to="/dashboard/order/:id" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/review" className="text-white">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/userOrder" className="text-white">
                            <FontAwesomeIcon icon={faShoppingBag} /> <span>Order List</span>
                        </Link>
                    </li>
          {  isAdmin &&  

            <div>
                    <li>
                            <Link to="/dashboard/addServices" className="text-white" >
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span>
                            </Link>
                    </li>
                    <li>
                            <Link to="/dashboard/addAdmin" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                            </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/allOrders" className="text-white">
                            <FontAwesomeIcon icon={faShoppingBag} /> <span>Orders List</span>
                        </Link>
                    </li> 
                    <li>
                        <Link to="/dashboard/manageServices" className="text-white" >
                        <FontAwesomeIcon icon={faThLarge} /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div>
            
        }         
                <li>
                    <Link onClick={handelSignOut} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </li>
        </ul>
    </section>
    );
};

export default SideBar;