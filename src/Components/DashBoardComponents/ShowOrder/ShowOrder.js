import React, { useEffect, useState } from 'react';
//import { UserContext } from '../../../App';
import SingleOrder from '../SingleOrder/SingleOrder';

const ShowOrder = () => {
    const [orders, setOrders] = useState([]);
   // const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    useEffect(()=>{
        fetch('https://tech-solution-farhan.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    console.log(orders);
    return (
        <div>
            {
                orders.map(order => <SingleOrder key={order._id} order={order} />)
            }
        </div>
    );
};

export default ShowOrder;