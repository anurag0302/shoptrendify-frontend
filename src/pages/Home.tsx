import React, { useState, useEffect } from 'react'
import Api from '../services/api';
import { Carousel } from 'antd';

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
        <Carousel autoplay>
            <div className='flex h-52 md:h-[80vh] w-full '>
                <img src="https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className='w-full h-full object-cover' />
            </div>
            <div className='flex bg-slate-400 h-52 md:h-[80vh] w-full '>
                <img src="https://images.unsplash.com/photo-1499096382193-ebb232527fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" className='w-full h-full object-cover' />
            </div>
            <div className='flex bg-red-300 h-52 md:h-[80vh] w-full '>
                <img src="https://plus.unsplash.com/premium_photo-1686529739564-37f1a12ec183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className='w-full h-full object-cover' />
            </div>
            <div className='flex bg-blue-300 h-52 md:h-[80vh] w-full '>
                <img src="https://images.unsplash.com/photo-1552767057-0316d96a96c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className='w-full h-full object-cover' />
            </div>
        </Carousel>
    )
}

export default Home