import React from 'react'
import './Header.css'
const Header = ({title,subTitle,firstName,lastName,date}) => 
     (
        <header className = "head-wrapper">
            <h1>{title}</h1>
            <h2>{subTitle}{firstName} {lastName}</h2>
            <p>{date}</p>
        </header>
    )
    

export default Header
