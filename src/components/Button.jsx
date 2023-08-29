import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-500 duration-500 lg:text-base text-xs'>
     {props.children}
    </button>
  )
}

export default Button
