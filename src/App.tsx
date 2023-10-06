import { useEffect, useState } from 'react'
import './App.css'
import { SITE_NAME } from './utils/constants'
import Api from './services/api'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getProd = async () => {
    const data = await Api.get('products');
    console.log(data)
  }
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
