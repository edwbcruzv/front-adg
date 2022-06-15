import React from 'react'
import {BrowserRouter as Router,
        Routes,
        Route } from 'react-router-dom'
import Inicio from './views/Inicio'
import Estadisticas from './views/Estadisticas'
import Mapas from './views/Mapas'
import Resultados from './views/Resultados'
import NotFoundPage from './views/NotFoundPage'

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Inicio/>}> </Route>
          <Route path="/estadisticas" element={<Estadisticas/>}> </Route>
          <Route path="/mapas" element={<Mapas/>}> </Route>
          <Route path="/resultados" element={<Resultados/>}> </Route>
          <Route path="*" element={<NotFoundPage/>}> </Route>
      </Routes>
  </Router>
  )
}

export default App