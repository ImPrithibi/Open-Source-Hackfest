import Floor from './Floor'

function Building({buildingName, numberOfFloors}){
    // numberOfFloors must be an array
    let floors = numberOfFloors.map((count) => {
        if (buildingName == "Library") {
            let image;
            let hasBathroom = true;
            if (count == 1) {
                image = "/src/assets/LibraryFirstFloor.PNG";
                hasBathroom = true;
            } else if (count==2) {
                image = "/src/assets/LibrarySecondFloor.PNG";
                hasBathroom = true;
            } else if (count==3) {
                image = "/src/assets/Library3rdFloor.PNG";
                hasBathroom = true;
            } else if (count==4) {
                image = "/src/assets/Library4thFloor.PNG";
                hasBathroom = true;
            } else if (count==5) {
                image = "/src/assets/Library5thFloor.PNG";
                hasBathroom = true;
            } else if (count==6) {
                hasBathroom = false;
            }
            return <li key={count}>
                <Floor floorNumber={count}  hasBathrooms={hasBathroom}></Floor>
                <img src={image}></img>
            </li>
        } else {
            return <li key={count}>
            <Floor floorNumber={count} hasBathrooms={true}></Floor>
        </li>
        }    
    })
    
    return (
        <div className="building">
            <header>
                <h1 className="buildingName">QC's {buildingName} Bathroom Status</h1>
                <a>Issue? Report here</a>
            </header>
            <div className="ListView">
                {floors}
            </div>
            
        </div>
    )

}

export default Building