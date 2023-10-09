import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <BrowserRouter>
      <Header user={null} />
    
        <AppRoutes />
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App
