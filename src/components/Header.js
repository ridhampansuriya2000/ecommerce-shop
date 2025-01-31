import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';
import Cart from '../img/cart.svg';
import {useAuth} from "../contexts/AuthContext";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { user, logout } = useAuth()
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}
    >
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={Logo} alt=''/> Blue Cart
          </div>
        </Link>
        <div
            onClick={() => setIsOpen(!isOpen)}
            className='cursor-pointer flex relative'
        >
          <div className="flex items-center mr-4">
            <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </div>
          <img className='w-[40px]' src={Cart} alt='Cart'/>
          <div
              className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
