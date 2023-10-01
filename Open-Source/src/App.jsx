import CampusMap from './Components/CampusMap'
import Building from './Components/Building'
import './App.css'

function App() {
  

  return (
    <>
      <div className="App">
        {/* <h1> Interactive Map made with React and Leaflet</h1> */}
        <CampusMap />
        <Building buildingName="Library" numberOfFloors={[1, 2, 3, 4, 5, 6]} />
       
      </div>
    </>
  )
}

export default App
