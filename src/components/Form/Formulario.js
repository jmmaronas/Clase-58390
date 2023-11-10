import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createOrder } from '../../services/firebaseServices';
import { useCartContext } from '../../hook/useCartContext';

function Formulario() {
    const [user, setUser] = useState({})
    const { cart } = useCartContext()

    const handleInput = ({ target }) => {
        setUser(currentValue => {
            currentValue[target.name] = target.value
            return currentValue
        })
        console.log(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(user)
        const buy = { cart, user }
        const order = await createOrder(buy)
        alert(`su pedido es el ${order}`)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name='email'
                    placeholder="Enter email"
                    onChange={handleInput}
                    value={user.email}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control
                    type="text"
                    name='username'
                    placeholder="Juan..."
                    onChange={handleInput}
                    value={user.username}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control
                    type="text"
                    name='tel'
                    placeholder="11-4455-5544"
                    onChange={handleInput}
                    value={user.tel}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Confirmar la compra
            </Button>
        </Form>
    );
}

export default Formulario;
