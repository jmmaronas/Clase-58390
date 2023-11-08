import { useState, useEffect } from "react"
import { getDataById } from "../../services/mockServices"
import { useParams } from "react-router-dom"
import ItemDetailList from "./ItemDetailList"
import Loading from "../Loading/Loading"
import { getProductById } from "../../services/firebaseServices"

function ItemDetailListContainer() {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    useEffect(()=>{
        const onResize = ()=> console.log("Cambio el tamaño")
        window.addEventListener("resize", onResize )
        return () =>{
            window.removeEventListener("resize", onResize)
        }
    },[])
    useEffect(() => {
        setLoading(true)
        getProductById(productId)
            .then((result => {
                setProduct(result)
                setLoading(false)
            }))
            .catch((error) => {
                console.log(error)
            })
    }, [productId])
    if (loading) return <Loading/>
    return (
        <ItemDetailList product={product} />
    )
}

export default ItemDetailListContainer