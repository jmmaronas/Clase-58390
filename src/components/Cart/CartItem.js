import { Button } from "react-bootstrap";

export default function CartItem({ item, handleDelete, handleDecrement, handleIcrement }) {

    return (
        <tr>
            <td className="text-center">{item.qty}</td>
            <td className="text-center">{item.nombre}</td>
            <td className="text-center">$ {item.precio}</td>
            <td className="text-center">$ {item.precio * item.qty}</td>
            <td className="d-flex justify-content-center gap-3">
                <Button variant="success" onClick={() =>handleIcrement(item.id)}>+</Button>
                <Button variant="success" onClick={()=>{handleDecrement(item.id)}} >-</Button>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>X</Button>
            </td>
        </tr>
    )
}
