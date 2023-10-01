import { useState } from 'react';
import '../Components.css'

function ReportForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="form">
            <h1 className='report-title'>Report A Bathroom Status Here</h1>
            <form onSubmit={handleSubmit}>
                <label name="building">Building Name</label>
                <select value={inputs.building} name="building" id="building" onChange={handleChange}>
                    <option value="Library">Library</option>
                </select>
                <label name="floor">Floor</label>
                <select value={inputs.floor}  name="floor" id="floor" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label name="gender">Gender</label>
                <select value={inputs.gender}  name="gender" id="gender" onChange={handleChange}>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                </select>
                <label name="issue">Issue</label>
                <select value={inputs.issue}  name="issue" id="issue" onChange={handleChange}>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                    <option value="Clean">Clean</option>
                    <option value="Dirty">Dirty</option>
                </select>
                <input type="submit"></input>
            </form>
        </div>
        
    )
}

export default ReportForm