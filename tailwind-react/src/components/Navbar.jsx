import React from 'react'

const Navbar = () => {
  return (
    <div className='container'>
        <TailwindCSSButton title="Tailwind Button" />
    </div>
  );
}
function TailwindCSSButton(props){
    return(
        <button className='bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600'>
        {props.title}
        </button>
    )
}

export default Navbar
