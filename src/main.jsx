import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header/Header.jsx'
import Counter from './counter/Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Counter />
  </React.StrictMode>
)
