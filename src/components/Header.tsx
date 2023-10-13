import React, { useState } from 'react'
import { SITE_NAME } from '../utils/constants';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';

type User = {
  name: string;
  email: string
}

type HeaderProps = {
  user: null | User
}

function Header({ user }: HeaderProps) {
  const [categoriesDisplay, setCategoriesDisplay] = useState(false);

  console.log(user)
  return (
    <div>
      <div className='h-[60px] z-10 md:h-[50px] bg-cuBgWhite w-full fixed flex items-center px-2 justify-between'>
        <div>
          <span className='font-semibold md:text-xl'>{SITE_NAME}</span>
        </div>
        <div className='hidden md:block'>
          <span className='hover:cursor-pointer hover:text-cuTeal mx-2'>New Arrivals</span>
          <span className='hover:cursor-pointer hover:text-cuTeal mx-2'>Popular</span>
          <span className='hover:cursor-pointer hover:text-cuTeal mx-2'>Featured Deals</span>
          <span className='hover:cursor-pointer hover:text-cuTeal mx-2'>Categories</span>
        </div>
        <div className='flex items-center flex-wrap'>
          <div className=' ml-2 md:mr-2 hover:cursor-pointer text-xl flex items-center hover:text-cuGreen'>
            <UserOutlined />
          </div>
          {user && <p>{user.name}</p>}
          <div className=' ml-2 md:mr-2 hover:cursor-pointer text-xl flex items-center hover:text-cuGreen'>
            <ShoppingCartOutlined />
          </div>
          <div className='ml-2 bg-white border-2 rounded-lg flex items-center flex-grow order-first md:order-none'>
            <input type="search" placeholder="Search..." className='p-1 rounded-lg w-36 focus:outline-none' />
            <SearchOutlined className='p-1 hover:cursor-pointer' />
          </div>
          <div className='ml-2 md:mr-2 hover:cursor-pointer text-xl flex items-center md:hidden hover:text-cuGreen' onClick={() => { setCategoriesDisplay(!categoriesDisplay) }}>
            <MenuOutlined />
          </div>

        </div>
      </div>
      {
        categoriesDisplay ? (
          <div className='bottom-0 z-10 md:hidden bg-cuBgWhite w-full fixed flex items-center px-2 justify-between transform translate-y-0 duration-1000 p-1'>
            <div className='flex flex-wrap justify-center w-full '>
              <div className='basis-1/2 flex px-2'>
                <button className='border-cuGreen w-full m-2 rounded-md p-2 border hover:text-cuGreen'>
                  New Arrivals</button>
              </div>
              <div className='basis-1/2 flex px-2'>
                <button className='border-cuGreen w-full m-2 rounded-md p-2 border hover:text-cuGreen'>Popular</button>
              </div>
              <div className='basis-1/2 flex px-2'>
                <button className='border-cuGreen w-full m-2 rounded-md p-2 border hover:text-cuGreen'>Featured Deals</button>
              </div>
              <div className='basis-1/2 flex px-2'>
                <button className='border-cuGreen w-full m-2 rounded-md p-2 border hover:text-cuGreen'>Categories</button>
              </div>
            </div>
          </div>
        ) : (
          <div className='bottom-0 z-10 md:hidden bg-cuBgWhite w-full fixed flex items-center px-2 justify-between transform translate-y-full duration-1000 p-1'>
            <div className='flex flex-wrap justify-center w-full '>
              <div className='basis-1/2 flex px-2'>
                <button className='border-cuGreen w-full m-2 rounded-md p-2 border hover:text-cuGreen'>
                  New Arrivals</button>
              </div>
              <div className='basis-1/2 flex px-2'>
                <button className='border-cuGreen w-full m-2 rounded-md p-2 border hover:text-cuGreen'>Popular</button>
              </div>
              <div className='basis-1/2 flex px-2'>
                <button className='border-cuGreen w-full m-2 rounded-md p-2 border hover:text-cuGreen'>Featured Deals</button>
              </div>
              <div className='basis-1/2 flex px-2'>
                <button className='border-cuGreen w-full m-2 rounded-md p-2 border hover:text-cuGreen'>Categories</button>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Header