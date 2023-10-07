import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProtectedRoute from './ProtectedRoute'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { authSelector, login, setLoading } from '../store/slices/authSlice'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppDispatch } from '../store/store'
import { TOKEN_NAME } from '../utils/constants'
import Api from '../services/api'

const AppRoutes = () => {
    const auth = useAppSelector(authSelector);
    const navigate = useNavigate();
    const dispatch: AppDispatch = useAppDispatch();
    const loaction = useLocation()
    const verifyLogin = async (token: string) => {
        const response = await Api.get('/verifylogin', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response;
    };
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem(TOKEN_NAME);
                if (token) {
                    const response = await verifyLogin(token)
                    if (response.status === 200) {
                        dispatch(login({ token, user: response.data.user }))
                        dispatch(setLoading(false))
                        navigate(loaction.pathname)
                    }

                }
                dispatch(setLoading(false))
            } catch (error) {
                console.log(error)
                localStorage.removeItem(TOKEN_NAME)
                dispatch(setLoading(false))
            }
        };

        fetchUser();
    }, [])

    if (auth.loading) {
        return (<div className='pt-16'> Loading... </div>)
    }
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<ProtectedRoute redirectPath="/login" />}>
                    <Route path="/cart" element={<Cart />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </div>
    )
}

export default AppRoutes