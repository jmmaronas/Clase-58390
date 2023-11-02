import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getData, getDataByCategory } from "../../services/mockServices"
import ItemList from "./ItemList"
import Loading from "../Loading/Loading"

function ItemListContainer() {
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setErro] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        setErro(false)
        const asyncFuction = categoryId ? getDataByCategory : getData
        asyncFuction(categoryId)
            .then((result) => {
                setProducts(result)
            })
            .catch((error) => {
                setErro(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])

    if (loading) return <Loading/> 
    if (error) return <h1>{error}</h1>
    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer