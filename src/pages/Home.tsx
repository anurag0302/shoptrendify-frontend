import React, { useState, useEffect } from 'react'
import Api from '../services/apis/api';
import { Carousel, Card } from 'antd';
import ImageShoe from '../assets/images/shoe.png'
import ImageShoeBg from '../assets/images/showbg.png'



type Product = {
    id: number;
    name: string;
    brand: string;
    gender: string;
    category: string;
    price: number;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    slug: string;
};

type HomeDataType = {
    Carousel: Product[];
    Categories: Product[];
}

const Home = () => {
    const [homeData, setHomeData] = useState<HomeDataType>()
    const [temp, settemp] = useState<Product[]>([])

    useEffect(() => {
        const getProd = async () => {
            const data = await Api.get('home');
            console.log(data)
            setHomeData(data.data)
        }
        getProd()

    }, [])
    useEffect(() => {
        const getProd = async () => {
            const data = await Api.get('products');
            console.log(data, 'sc')
            settemp(data.data)
        }
        getProd()

    }, [])

    return (
        <div className='p-5'>
            {
                homeData?.Carousel && <Carousel autoplay className='p-2 bg-cuWhiteSmoke z-0 '>
                    {homeData.Carousel.map((product: Product) => {
                        return <div key={product.id} className='flex h-52 md:h-[60vh] w-full outline-none '>
                            <img src={product.imageURL} className='w-full h-full object-contain' />
                        </div>
                    })}
                </Carousel>
            }
            {
                homeData?.Categories && <div className='flex p-4 justify-center overflow-x-auto '>
                    {homeData.Categories.map((productCat: Product) => {
                        return <Card key={productCat.id} bordered={false} className={`m-4  min-w-[200px] text-center bg-cuWhiteSmoke hover:cursor-pointer`} >
                            <img src={productCat.imageURL} className=' w-full h-full' />
                            <span>New Arrivals</span>
                        </Card>
                    })}
                </div>
            }
            <div className='p-2'>
                <div className='flex justify-between'>
                    <span>Top Pick</span>
                    <a href="/">Show more</a>
                </div>
                <div className='bg-cuGreen w-full h-1 my-2'></div>
                <div className={` bg-cuWhiteSmoke p-4 flex flex-wrap  w-full`}>
                    <div className=' flex justify-center items-center md:items-end w-full md:max-w-fit p-4 flex-col'>
                        <span className='p-4 font-bold text-4xl'>$120.00</span>
                        <span className=' bg-black text-white  p-4 rounded-full font-bold text-2xl hover:cursor-pointer'>Add To Bag</span>

                    </div>
                    <div className='   flex justify-center items-center  relative'>
                        <img src={ImageShoeBg} className='w-96 rotate-12' />
                        <img src={ImageShoe} className='w-96 absolute -rotate-12 scale-75 -top-2 hover:scale-100 hover:-rotate-6 transform duration-1000 hover:cursor-pointer' />
                    </div>
                    <div className=' flex flex-col justify-center  flex-1'>
                        <div className={`flex m-5 justify-end items-center flex-col`}>
                            <span className='font-bold text-4xl italic text-cuVoilet'>Nike Air Max 270</span>
                            <span className='font-bold text-4xl italic text-cuVoilet'>Men's Shoes</span>
                        </div>
                        <span className='pl-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sunt culpa maiores laudantium. Harum molestiae autem, corrupti sunt enim aperiam exercitationem laboriosam fugiat cupiditate necessitatibus nostrum voluptatum provident magni minus.</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home;

// {
//     temp.map((te) => {
//         return <img key={te.id} src={te?.imageURL} className='w-72' />

//     })
// }