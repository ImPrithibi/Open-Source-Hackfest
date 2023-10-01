import Button from './Button.jsx'
// import { useState } from 'react'


function Floor({floorNumber, hasBathrooms}){
    
    if (hasBathrooms) {
        let currentWStatus = 'Open'
        let currentWCleanliness = 'Clean'
        let currentMStatus = 'Closed'
        let currentMCleanliness = 'Dirty'

        return (
            <div className="floor-container">
                <h1 className='floor-title'>Floor {floorNumber} </h1>
                <div className="floor">
                    <section>
                        <h3>Women&rsquo;s</h3>
                        <Button status={currentWStatus}></Button>
                        <Button status={currentWCleanliness}></Button>
                    </section>
                    <section>
                        <h3>Men&rsquo;s:</h3>
                        <Button status={currentMStatus}></Button>
                        <Button status={currentMCleanliness}></Button>
                    </section>
                </div>
            </div>
        )
    } else {
        return (
            <div className="floor-container">
                <h1 className='floor-title'>Floor {floorNumber} </h1>
                <div className="floor">
                    <h3>This floor has no bathrooms.</h3>
                </div>
            </div>
        )
    }
}

// the code below would be used to update the state of the bathrooms based off backend data

// const [currentStatus, setCurrentStatus] = useState('Open')
        // const [currentCleanliness, setCurrentCleanliness] = useState('Clean')

        // using backend for these functions to update: 
        // const updateStatus = () => {
        //     if (currentStatus == 'Open') {
        //         setCurrentStatus('Closed')
        //     } else if (currentStatus == 'Closed') {
        //         setCurrentStatus('Closed')
        //     }
        // }

        // const updateCleanliness = () => {
        //     if (currentCleanliness == 'Clean') {
        //         setCurrentCleanliness('Dirty')
        //     } else if (currentCleanliness == 'Dirty') {
        //         setCurrentCleanliness('Clean')
        //     }
        // }

export default Floor