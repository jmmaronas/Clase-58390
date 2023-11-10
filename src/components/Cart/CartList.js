import Formulario from '../../components/Form/Formulario'
import { useCartContext } from '../../hook/useCartContext'
import CartItem from './CartItem';
import Table from 'react-bootstrap/Table';

export default function CartList() {
    const { cart, removeToCart } = useCartContext()

    const handleDelete = (id) => {
        removeToCart(id)
    }

    const increment = ()=>{
    
    }

    const decrement = ()=>{

    }

    return (
        <div className='container-fluid d-flex gap-4 justify-content-around'>
            <div className='col-8'>
                <h1>Detalles de la compra</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Subtotal</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => <CartItem key={item.id} item={item} handleDelete={handleDelete} handleIcrement={increment} handleDecrement={decrement} />)}
                    </tbody>
                </Table>
            </div>
            <div className='col-3'>
                <h1>Datos del usuario</h1>
                <Formulario />
            </div>
        </div>
    );
}
