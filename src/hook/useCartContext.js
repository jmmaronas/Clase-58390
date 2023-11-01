import { useContext } from "react"
import { cartContext } from "../Context/CartContext"


export const useCartContext = () =>{
    return useContext(cartContext)
}