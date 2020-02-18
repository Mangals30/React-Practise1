import React from 'react'
import './Main.css'
const Main = ({skillSets}) => 
     (<main class = "main-wrapper">
       <p>Pre-requisites to get started with React</p>
        <div class = "skill-sets">{skillSets}</div>
    </main>)


export default Main