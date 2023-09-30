import CampusMap from './Components/CampusMap'
import Building from './Components/Building'
import NavBar from './Components/NavBar';
import './App.css'

function App() {
  

  return (
    <>
      <div className="App">
          <NavBar />
        <div id="campus-map">
          <CampusMap />
        </div>
        <div id="building">
          <Building buildingName="Library" numberOfFloors={[1, 2, 3, 4, 5, 6]} />
        </div>
      </div>
    </>
  )
}

export default App
