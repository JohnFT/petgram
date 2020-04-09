import React from 'react'
import ReactDOM from 'react-dom'

const container = document.getElementById('app')
const Hola = () => (
  <div>
    <h1>Hola</h1>
  </div>
)

ReactDOM.render(<Hola />, container)
