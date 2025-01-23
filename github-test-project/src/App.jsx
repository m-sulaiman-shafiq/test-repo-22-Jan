import { useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Github test project</h1>

     <p>THE MAIN PROJECT</p>
         <p>this is Main</p>
         <div className='reviewits'>
              <p>RW-The "ReviewItsPage" is a dedicated section designed to streamline the 
                process of collecting and showcasing reviews. It allows users to share feedback, 
                helping businesses or platforms improve their offerings. With an intuitive interface,
                 users can easily submit reviews, while admins can manage and display them effectively. 
                 This page enhances transparency, builds trust, and fosters better engagement between businesses
                  and their audience.</p>
         </div>
      <div className='research'>
        <p>++++++Research page content here++++</p>
      </div>
    </>
  )
}

export default App
