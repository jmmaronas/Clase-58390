import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getData, getDataByCategory } from "../../services/mockServices"
import ItemList from "./ItemList"
import Loading from "../Loading/Loading"

function ItemListContainer() {
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    useEffect(() => {
        setLoading(true)
        const asyncFuction = categoryId ? getDataByCategory : getData
        asyncFuction(categoryId)
            .then((result) => {
                setProducts(result)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [categoryId])
    if (loading) return <Loading/>
    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer