import React from 'react'
import ReactDOM from 'react-dom/client'


import './global.css'

import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separetor } from './components/Separator'

const tweets = [
  'Paipai quero soltar um PIDO!!',
  'PATCHON!!!!',
  'Eu escutei!'
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar  />

        <div className="content">
          <main className="timeline">
            <Header title= "Home"/>

            <form className='new-tweet-form'>
              <label htmlFor="tweet">
                <img src="https://github.com/caruso013.png" alt="Pedro Domingos" />
                <textarea id="tweet" placeholder='What´s happening?'/>
              </label>

              <button type='submit'>Tweet</button>
            </form>
            <Separetor />

            {tweets.map(tweet =>{
              return<Tweet key={tweet} content={tweet} />
            }) }
          </main>
        </div>
    </div>
  </React.StrictMode>,
)
