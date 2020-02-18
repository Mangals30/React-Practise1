import React from 'react'
import Header from './components/Header' 
import Main from './components/Main'
import './App.css'
import dateToday from './date'
import Footer from './components/Footer'

const App = () => {
    const title = 'Getting started with React'
    const subTitle = 'Student: '
    const firstName = 'Mangalam'
    const lastName = 'Krishnan'
    const date = dateToday()
    const skills = ['HTML','CSS','Javascript','React']
    const skillSets = skills.map(skill => <div class = "skill">{skill}</div>)
    const copyRight = 'CopyRight'
    const copyRightYear = new Date().getFullYear()
    return (
        <div>
            <Header
            title = {title}
            subTitle = {subTitle}
            firstName = {firstName}
            lastName = {lastName}
            date = {date}
            />
            <Main
            skillSets = {skillSets}
            />
            <Footer
            copyRight = {copyRight}
            copyRightYear = {copyRightYear}
            />
        </div>
        
    )
}

export default App