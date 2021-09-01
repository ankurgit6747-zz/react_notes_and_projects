import React from 'react'
import ProductComponent from './ProductComponent'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { useEffect } from 'react'
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {

    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()

    // const {id, title} = products[0]

    const fetchData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) =>  console.log(err))
        dispatch(setProducts(response.data))  // this is going to return that object
    }

    console.log("PRODUCTS : ", products);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="ui grid container">
             <ProductComponent />
        </div>
    )
}

export default ProductListing
