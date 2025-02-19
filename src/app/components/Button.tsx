"use client"

import React from 'react'

const Button = () => {

    const onHandleButtonClick = () => {
        alert("Por que você clicou? Você está louco?")
    }

  return (

    <div className='flex justify-center items-center'>

        <button className='bg-purple-950 p-3 rounded-lg hover:opacity-70' onClick={onHandleButtonClick}>NÃO CLIQUE</button>

    </div>
  )
}

export default Button