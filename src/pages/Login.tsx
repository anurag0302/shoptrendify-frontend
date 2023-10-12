import { Card } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full  min-h-[93vh] bg-slate-200 flex justify-center items-start'>
      <Card className="flex flex-col bg-cuBgWhite mt-10 w-[90%] md:w-[400px]">
        <h1 className='text-lg font-bold'>Login</h1>
        <div className='mt-4'>
          <label htmlFor="email">Email</label>
          <input className='w-full p-2 mt-1 focus:outline-none' type='email' />
          <span className='font-light text-xs text-red-600'>Email required</span>
        </div>
        <div className='mt-4'>
          <label htmlFor="password">Password</label>
          <input className='w-full p-2 mt-1 focus:outline-none' type='password' />
          <span className='font-light text-xs text-red-600'>Password required</span>
        </div>
        <div className="flex justify-between items-center">
          <button className='bg-cuGreen px-4 py-2 my-4 hover:bg-cuTeal hover:text-cuWhiteSmoke '>Login</button>
          <NavLink className='mx-1 text-cuTeal' to={'/'}>Forget Password?</NavLink>
        </div>
        <div className='flex justify-center'>
          <p>Not a Member?</p>
          <NavLink className='mx-1 text-cuTeal' to={'/signup'}>Signup</NavLink>
        </div>
      </Card>
    </div>
  )
}

export default Login