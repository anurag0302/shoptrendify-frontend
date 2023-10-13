import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useAppSelector } from './hooks/reduxHooks'
import { authSelector } from './store/slices/authSlice'

function App() {
  const auth = useAppSelector(authSelector);
  return (
    <BrowserRouter>
      <Toaster />
      <Header user={auth.user} />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
