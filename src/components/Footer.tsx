import React from 'react'
import { SITE_NAME } from '../utils/constants'
import { InstagramOutlined, WhatsAppOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons'

const Footer = () => {
    return (
        <div className='p-4 bg-cuIndigo'>
            <div className='flex justify-start items-center p-3'>
                <span className='text-white font-bold text-2xl'>{SITE_NAME}</span>
            </div>
            <hr />
            <div className='flex justify-center items-center p-3'>
                <div className='text-center'>
                    <div className='flex'>
                        <InstagramOutlined className='text-white border p-2 border-white rounded-2xl hover:cursor-pointer hover:bg-white hover:text-black mx-2' />
                        <FacebookOutlined className='text-white border p-2 border-white rounded-2xl hover:cursor-pointer hover:bg-white hover:text-black mx-2' />
                        <TwitterOutlined className='text-white border p-2 border-white rounded-2xl hover:cursor-pointer hover:bg-white hover:text-black mx-2' />
                        <WhatsAppOutlined className='text-white border p-2 border-white rounded-2xl hover:cursor-pointer hover:bg-white hover:text-black mx-2' />
                    </div>
                    <hr className='my-3'/>
                    <span className='text-white'>{SITE_NAME} Community</span>
                </div>
            </div>
        </div>
    )
}

export default Footer