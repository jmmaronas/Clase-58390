import React from 'react'
import { useCartContext } from '../../hook/useCartContext'
import CartItem from './CartItem';
import Table from 'react-bootstrap/Table';

export default function CartList() {
    const { cart, removeToCart } = useCartContext()
    
    const handleDelete=(id)=>{
        removeToCart(id)
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(item =><CartItem key={item.id} item={item} handleDelete={handleDelete} />)}
            </tbody>
        </Table>
    );
}
