import React from 'react'
import image from '../images/logo.jpeg'
import  Link from 'next/link'
import useRouter from 'next/navigation'
import Image from 'next/image'


const Footer = () => {
    // let location=useRouter().pathname;
  return (
    <div>
    <footer className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 flex flex-row justify-center items-center">
			<Image src={image} width={50} height={50} alt=""/>
			<p className='text-2xl text-center text-white font-bold ml-3 bg-red-500 w-auto h-auto py-1 pr-2'><span className=' bg-black text-white px-2 py-1'>Bluechip</span> Art </p>
		</div>
	  <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
              </span>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
               
          </div>
        </div>
	  </div>
    </footer>
    </div>
  )
}

export default Footer
