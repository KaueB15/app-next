import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-around items-center w-full border-b-white border-b p-4'>
      <h1 className='text-3xl font-bold'>Batista</h1>
      <p className='text-2x1 font-bold'>Não <span className='text-red-600'>Clique</span> no Botão Abaixo, tome Cuidado!!!</p>  
    </header>
  )
}

export default Header