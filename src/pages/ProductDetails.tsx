import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductDetails } from '../store/services/products';
import { Product, Review } from '../utils/types/product';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { MinusOutlined, PlusOutlined, ShoppingOutlined, StarFilled } from '@ant-design/icons';
import { Card, Progress } from 'antd';

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [addToCart, setAddToCart] = useState<number>(1)

    useEffect(() => {
        if (id) {
            fetchProductDetails(id)
                .then((productData) => {
                    setProduct(productData);
                })
                .catch(() => {
                    setError('No Product Found');
                });
        }
    }, [id]);

    function calculateAverageRating(reviews: Review[]) {
        const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
        return reviews.length === 0 ? 0 : (totalRatings / reviews.length).toFixed(1);
    }

    const renderStars = (numStars: number) => {
        const stars = [];
        for (let i = 0; i < Math.floor(numStars); i++) {
            stars.push(
                <span key={i} className='text-yellow-400 flex '>
                    <StarFilled />
                </span>
            );
        }
        return stars;
    }
    const discountPrice = (realPrice: number, discount: number) => {
        const price = realPrice - (realPrice * (discount / 100))
        return price;
    }

    const checkrating = (totalReview: Review[], rating: number) => {
        const filteredReviews = totalReview.filter((review) => review.rating === rating);
        const filterPercent = (filteredReviews.length / totalReview.length) * 100
        return filterPercent;
    }
    const getDatetoString = (date: Date) => {
        const newDate = new Date(date);
        return newDate.toDateString();
    }



    const handleAddtoCart = (itemsLimit: number) => {
        if (addToCart < itemsLimit) {
            setAddToCart(addToCart + 1)
        }

    }
    const handleRemovetoCart = () => {
        if (addToCart > 1) {
            setAddToCart(addToCart - 1)
        }
    }

    return (
        <div>
            {error ? (
                <div className='flex justify-center'><Error error={error} /></div>
            ) : product ? (
                <div className='w-full'>
                    <div className='md:flex bg-cuWhiteSmoke'>
                        {/* left */}
                        <div className='bg-cuWhiteSmoke h-96 md:flex-2 flex justify-center'>
                            <img src={product.imageURL} alt="" className='h-full' />
                        </div>
                        {/* right */}
                        <div className='bg-slate-200 md:flex-3 flex justify-center'>
                            <div className='w-[90%] p-6 '>
                                <span className='bg-white px-2 py-1 rounded-2xl text-xs'>70% off</span>
                                <p className='font-bold text-xl mt-2'>{product.name}</p>
                                <div className='flex'>
                                    {renderStars(Number(calculateAverageRating(product.reviews)))}
                                    <p className='mx-1 text-xs font-light'>( from {product.reviews.length} reviews )</p>
                                </div>
                                <div className='flex mb-2 items-center'>
                                    <p className='mx-1 text-lg font-bold'>${discountPrice(product.price, product.discountPercent)}</p>
                                    <p className='text-xs font-light'>( <s>${product.price}</s> )</p>
                                </div>
                                <div className="flex mb-2">
                                    <div className='flex justify-center items-center bg-cuGreen px-4 py-2 hover:cursor-pointer hover:bg-cyan-500 mr-3'>
                                        <ShoppingOutlined />
                                        <p className='mx-2'>Add to Cart</p>
                                    </div>
                                    <div className='flex justify-center items-center bg-cuWhiteSmoke  mr-3'>
                                        <PlusOutlined className='h-full flex items-center hover:bg-cuGreen p-2' onClick={() => {
                                            handleAddtoCart(product.items_left)
                                        }} />
                                        <p className='mx-2'>{addToCart}</p>
                                        <MinusOutlined className='h-full flex items-center hover:bg-red-400 p-2' onClick={() => {
                                            handleRemovetoCart()
                                        }} />
                                    </div>
                                </div>
                                <div className="my-5 ">
                                    <p className='font-medium'>Description :</p>
                                    <p className='text-sm'>{product.description}</p>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='p-10 flex flex-col justify-center items-center md:flex-row md:items-start'>
                        <div className='flex-2 p-6 w-full '>
                            <Card className='bg-slate-200'>
                                <h4 className='text-lg font-bold'>Reviews</h4>
                                {
                                    product.reviews.map((review)=>{
                                        return <div >
                                        <div className='h-[1px] bg-cuVoilet'></div>
                                        <div className='flex'>
                                            <div className='flex-3 p-3'>
                                                <p>{review.comment}</p></div>
                                            <div className='flex-1'>
                                                <h4>Reviewed By : {review.userName}</h4>
                                                <div className='h-10 w-10 rounded-lg bg-cuBgWhite flex justify-center items-center'>
                                                    <p>{review.rating}</p>
                                                    <span className='text-yellow-400 flex mx-1 '>
                                                        <StarFilled />
                                                    </span>
    
                                                </div>
                                                <p>{getDatetoString(review.date)}</p></div>
                                        </div>
    
                                    </div>
                                    })
                                }
                            </Card>
                        </div>
                        <Card className='bg-slate-200 '>
                            <p className='font-bold text-2xl'>{calculateAverageRating(product.reviews)}</p>
                            <p className='font-light text-sm'>{product.reviews.length} Reviews</p>
                            <div className='flex flex-col'>
                                <Progress percent={checkrating(product.reviews, 5)} status="active" size={[300, 20]} strokeColor={"rgb(250 240 12)"} />
                                <Progress percent={checkrating(product.reviews, 4)} status="active" size={[300, 20]} strokeColor={"rgb(250 240 12)"} />
                                <Progress percent={checkrating(product.reviews, 3)} status="active" size={[300, 20]} strokeColor={"rgb(250 240 12)"} />
                                <Progress percent={checkrating(product.reviews, 2)} status="active" size={[300, 20]} strokeColor={"rgb(250 240 12)"} />
                                <Progress percent={checkrating(product.reviews, 1)} status="active" size={[300, 20]} strokeColor={"rgb(250 240 12)"} />
                            </div>
                        </Card>
                    </div>

                </div>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default ProductDetails