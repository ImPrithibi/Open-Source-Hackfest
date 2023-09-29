import Floor from './Floor'


function BuildingListView({buildingName, numberOfFloors}){
    // numberOfFloors must be an array
    let floors = numberOfFloors.map((count) => {
        return <li key={count}>
            <Floor floorNumber={count}></Floor>
        </li>
    })
    
    return (
        <div>
            <h1>{buildingName} Bathroom Status</h1>
            <a>Issue? Report here</a>
            <div className="ListView">
                {floors}
            </div>
        </div>
    )

}

export default BuildingListView