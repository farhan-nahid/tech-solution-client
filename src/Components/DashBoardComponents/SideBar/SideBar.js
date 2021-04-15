import { faCommentDots, faPlus, faShoppingBag, faShoppingCart, faSignOutAlt, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import title from '../../../img/tech-solution.png';
import './SideBar.css';

const SideBar = () => {

    const [loggedInUser, setLoggedInUser, ] = useContext(UserContext);

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
        <section className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
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
                <Link to="/dashboard/order" className="text-white">
                    <FontAwesomeIcon icon={faShoppingBag} /> <span>Order List</span>
                </Link>
            </li>
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
        </ul>
        <div>
            <Link onClick={handelSignOut} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </section>
    );
};

export default SideBar;