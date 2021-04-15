import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faCalendar, faCog, faGripHorizontal, faPlus, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import title from '../../../img/tech-solution.png';
import './SideBar.css';

const SideBar = () => {
    return (
        <section className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
           <Link to="/"> 
                <img className="img-fluid" src={title} alt="..."/>
            </Link>
        <ul className="list-unstyled">
            <li>
                <Link to="/dashboard/appointment" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                </Link>
            </li>
            <li>
                <Link to="/appointment" className="text-white">
                    <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                </Link>
            </li>
            <li>
                <Link to="/doctor/prescriptions" className="text-white">
                    <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                </Link>
            </li>
            <li>
                    <Link to="/dashboard/addAdmin" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                    </Link>
             </li>
            <li>
                    <Link to="/dashboard/addServices" className="text-white" >
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span>
                    </Link>
             </li>
            <li>
                <Link to="/doctor/setting" className="text-white" >
                  <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                </Link>
            </li>
        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </section>
    );
};

export default SideBar;