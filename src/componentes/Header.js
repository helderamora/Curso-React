import React from 'react'
import Logo from './imgs/Logo.png'

export default function Header() {
    return (
        <header className='box-img'>
            <img className='image' src={Logo} alt='Logo do App' />
        </header>
    )
}