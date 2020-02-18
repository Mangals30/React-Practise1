import React from 'react'
import './Footer.css'

const Footer = ({copyRight,copyRightYear}) => 
     (
        <footer class = "footer-wrapper">
            {copyRight} {copyRightYear}
        </footer>
    )


export default Footer