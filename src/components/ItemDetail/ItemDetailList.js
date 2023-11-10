import { useState } from "react";
import ItemDetail from ".";
import ItemCount from "../Count/ItemCount";
import { useCartContext } from "../../hook/useCartContext"
import { Card } from "react-bootstrap";

export default function ItemDetailList({ product }) {
    const { addToCart } = useCartContext()
    const [count, setCount] = useState(1)

    const handleIncrement = () => {
        if (count < product.stock)
            setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count > 1)
            setCount(count - 1)
    }

    const onAdd = () => {
        addToCart(product, count)
    }

    return (
        <div className="container d-flex flex-column gap-4 my-5 justify-content-center">
            <Card style={{ width: '26rem' }}>
                <ItemDetail key={product.id} product={product} count={count} />
                <ItemCount add={onAdd} increment={handleIncrement} decrement={handleDecrement} count={count} />
            </Card>
        </div>
    )
}