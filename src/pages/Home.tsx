import React, { useState, useEffect } from 'react'
import Api from '../services/api';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProd = async () => {
            const data = await Api.get('products');
            console.log(data)
            setProducts(data.data)
        }
        getProd()
    
    }, [])
    
    return (
        <div>Home
            {products.map((product,index)=>{
                return <p key={index}>{product.name}</p>
            })}
        </div>
    )
}

export default Home