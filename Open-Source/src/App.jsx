// import { useState } from 'react'
import './App.css'
import  Building from './Components/Building'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Building buildingName="Library" numberOfFloors={[1, 2, 3, 4, 5, 6]}></Building>
      </div>
    </>
  )
}

export default App
