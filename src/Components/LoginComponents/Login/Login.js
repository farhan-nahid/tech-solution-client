import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import google from '../../../img/Icon/google.png';
import Footer from '../../SharedComponents/Footer/Footer';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import { firebaseConfig } from './firebase.config';
import './Login.css';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } }
  
    const handelGoogleSignIn= () => {
      const googleProvider = new firebase.auth.GoogleAuthProvider();
    
      firebase
      .auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
          const {displayName, email, photoURL} = result.user;
          const signedInUser ={ name: displayName, email : email, img:photoURL}
          setLoggedInUser  (signedInUser);
          history.replace(from)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
      });
    }


    return (
        <section>
            <div className="bg-light">
               <NavBar />
               </div>
                    <div className="mt-4 mb-5 pt-5">
                        <div className="icons" onClick={handelGoogleSignIn}>
                            <img src={google} alt="" />
                            <span>Continue with Google</span>
                        </div>
                    </div> 
            <Footer />
        </section>
    );
};

export default Login;