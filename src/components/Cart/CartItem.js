import React from 'react'

export default function CartItem({ item, handleDelete }) {

    return (
        <tr>
            <td>{item.qty}</td>
            <td>{item.nombre}</td>
            <td>{item.precio * item.qty}</td>
            <td><button onClick={()=>handleDelete(item.id)}>X</button></td>
        </tr>
    )
}
