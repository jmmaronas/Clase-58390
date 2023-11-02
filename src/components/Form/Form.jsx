import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleInputEmail = (e) => {        
        setEmail(e.target.value)
    }

    const handleInputPass = ({target}) => {
        setPass(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(`Email: ${email}, Pass: ${pass}`)
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={handleInputEmail}
                    value={email}                    
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handleInputPass}
                    value={pass}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Formulario;
