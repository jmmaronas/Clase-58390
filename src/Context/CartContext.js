import { createContext, useState } from "react";

export const cartContext = createContext()

const { Provider } = cartContext

function CartContextProvider({ children }) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    const addToCart = (product, count) => {
        setCart([...cart, { ...product, qty: count }])
    }

    const qtyCart = () => {
        return cart.reduce((acc, current) => acc + current.qty, 0)
    }

    const removeToCart = (id) => {
        const newCart = cart.filter(e => e.id !== id)
        setCart(newCart)
    }

    return (
        <Provider value={{ cart, addToCart, qtyCart, removeToCart }}>
            {children}
        </Provider>
    )
}

export default CartContextProvider