import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'

import Index from './pages/Index'
import List from './pages/List'
import Read from './pages/Read'

function App() {
  return (
    <div className="App">
      <Route component={Index} path={['/', '/eternalcity']} exact />
      <Route component={List} path={['/eternalcity/:service/:child/list', '/eternalcity/:service/:child/list/:number']} />
      <Route component={Read} path={['/eternalcity/:service/:child/read', '/eternalcity/:service/:child/read/:number']} />
    </div>
  )
}

export default App
