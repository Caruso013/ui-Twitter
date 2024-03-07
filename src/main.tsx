import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'

import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <Tweet user="Bruna">
      Velha por aqui
      </Tweet>
      
      <Tweet user="Luna" likes= {10} >
      Down por aqui
      </Tweet>
      
      <Tweet user="Peluzzo">
      Mucilon por aqui
      </Tweet>

      <Tweet user="Maria">
      Estressada por aqui
       </Tweet>

      <Tweet user="caruso">Test </Tweet>      
    </div>
  </React.StrictMode>,
)
