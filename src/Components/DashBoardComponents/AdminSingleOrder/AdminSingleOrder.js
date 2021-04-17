import React from 'react';

const AdminSingleOrder = ({order}) => {
    return (   
        <tbody>     
                <tr>
                     <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.price}</td>
                    <td> pending</td>
                </tr>  
        </tbody>
 
    );
};

export default AdminSingleOrder;