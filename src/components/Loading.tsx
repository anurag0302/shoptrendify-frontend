import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-[100vh] bg-black flex justify-center items-center opacity-30'>
        <LoadingOutlined className='text-white text-5xl'/>
    </div>
  )
}

export default Loading