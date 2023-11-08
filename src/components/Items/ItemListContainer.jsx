import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import Loading from "../Loading/Loading"
import { getProducts, getProductsByCategory } from "../../services/firebaseServices"

function ItemListContainer() {
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setErro] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        setErro(false)
        const asyncFuction = categoryId ? getProductsByCategory : getProducts
        asyncFuction(categoryId)
            .then((result) => {
                console.log(result)
                setProducts(result)
            })
            .catch((error) => {
                setErro(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
    
    if (loading) return <Loading />
    if (error) return <h1>{error}</h1>
    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer