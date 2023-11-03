import { useState } from "react";
import ItemDetail from "./";
import ItemCount from "../Count/ItemCount";
import { useCartContext } from "../../hook/useCartContext"

export default function ItemDetailList({ product }) {
    const { addToCart, cart } = useCartContext()
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
            <ItemDetail key={product.id} product={product}/>
            <ItemCount add={onAdd} increment={handleIncrement} decrement={handleDecrement} count={count} />
        </div>
    )
}