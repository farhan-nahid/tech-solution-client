import React from 'react';

const AdminSingleOrder = ({order}) => {
    const {userName, email, card, service} = order
    console.log(card);
    return (   
        <tbody>     
                <tr>
                    <td>{userName}</td>
                     <td>{email}</td>
                    <td>{service}</td>
                    <td> pending</td>
                </tr>  
        </tbody>
 
    );
};

export default AdminSingleOrder;