import CampusMap from './Components/CampusMap'
import Building from './Components/Building'
import ReportForm from './Components/ReportForm'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<CampusMap />} />
          <Route path='/Library' element={<Building buildingName="Library" numberOfFloors={[1, 2, 3, 4, 5, 6]} />} />
          <Route path ='/Report' element={<ReportForm/>}></Route>    
        </Routes>
      </Router>
    </>
  )
}

export default App
