import { createContext, useState } from "react";

export const cartContext = createContext()

const { Provider } = cartContext

function CartContextProvider({ children }) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    const addToCart = (product, count) => {
        const newCart = [...cart]
        newCart.push({ ...product, qty: count })
        setCart(newCart)
        //setCart([...cart, { ...product, qty: count }])
    }

    const increment= (id)=>{
        const newCart = [...cart]
        const index = cart.findIndex(e=>e.id=id)
        newCart[index].qty++
        setCart(newCart)
    }

    const decrement = (id)=>{
        const newCart = [...cart]
        const index = cart.findIndex(e=>e.id=id)
        newCart[index].qty--
        setCart(newCart)
    }

    const qtyCart = () => {
        return cart.reduce((acc, current) => acc + current.qty, 0)
    }

    const removeToCart = (id) => {
        const newCart = cart.filter(e => e.id !== id)
        setCart(newCart)
    }

    return (
        <Provider value={{ cart, addToCart, qtyCart, removeToCart, increment, decrement }}>
            {children}
        </Provider>
    )
}

export default CartContextProvider