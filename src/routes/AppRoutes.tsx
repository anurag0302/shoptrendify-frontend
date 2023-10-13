import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProtectedRoute from './ProtectedRoute'
import ProductDetails from '../pages/ProductDetails'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks/reduxHooks'
import { AppDispatch } from '../store/store'
import { SITE_NAME } from '../utils/constants'
import { verifyloginService } from '../store/services/user'
import { login } from '../store/slices/authSlice'
import Loading from '../components/Loading'

const AppRoutes = () => {

    const [loading, setLoading] = useState<boolean>(true)

    const dispatch: AppDispatch = useAppDispatch();
    // const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const token = localStorage.getItem(SITE_NAME + 'token');
            if (token) {
                try {
                    const response = await verifyloginService(token);
                    if (response) {
                        dispatch(login({ user: response.user, token: response.token }));
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            setLoading(false)
        }

        fetchData(); // Call the async function here

    }, [dispatch]);

    return (
        <div className='pt-[60px] md:pt-[50px] min-h-screen'>
            {
                loading ? <Loading /> :
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:id" element={<ProductDetails />} />
                        <Route element={<ProtectedRoute redirectPath="/login" />}>
                            <Route path="/cart" element={<Cart />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="*" element={<p>There's nothing here: 404!</p>} />
                    </Routes>
            }
        </div>
    )
}

export default AppRoutes