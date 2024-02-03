import React from 'react'
import Logo from './imgs/Logo.png'

export default function Header() {
    return (
        <header>
            <img src={Logo} alt='Logo do App' />
        </header>
    )
}