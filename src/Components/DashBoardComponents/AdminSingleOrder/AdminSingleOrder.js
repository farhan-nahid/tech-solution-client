import React from 'react';

const AdminSingleOrder = ({order}) => {
    const {userName, email, price, service} = order
    return (   
        <tbody>     
                <tr>
                    <td>{userName}</td>
                     <td>{email}</td>
                    <td>{service}</td>
                    <td>{price}</td>
                    <td> pending</td>
                </tr>  
        </tbody>
 
    );
};

export default AdminSingleOrder;