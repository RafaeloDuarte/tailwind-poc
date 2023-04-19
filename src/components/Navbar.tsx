import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar(): JSX.Element {

  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#d144ba] p-4">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-[#000300]' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className='uppercase p-4'>
          <li className="p-4 hover:animate-pulse hover:border-b border-gray-900">Home</li>
          <li className="p-4 hover:animate-pulse hover:border-b border-gray-900">Company</li>
          <li className="p-4 hover:animate-pulse hover:border-b border-gray-900">Resources</li>
          <li className="p-4 hover:animate-pulse hover:border-b border-gray-900">About</li>
          <li className="p-4 hover:animate-pulse">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar; 