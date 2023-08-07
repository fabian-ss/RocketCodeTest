import React from 'react'
import {ContactoForm} from './components/ContactoForm'
import {NombreForm} from './components/NombreForm'
import {FechaNacimientoForm} from './components/FechaNacimientoForm'
function App() {

  return (
    <div>
      <NombreForm />
      <FechaNacimientoForm />
      <ContactoForm />
    </div>
  )
}

export default App

// /^[A-Za-z]+$/
// /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
