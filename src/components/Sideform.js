import React from 'react'
import './component.css'



const Sideform = () => {

    return (
        <div className="card border-sencondary position-absolute" id="sideFormStyle" >
            <div className="card-header text-black" id="sideFormHeaderStyle">
                <h5>Two Way Data Binding</h5>
                <p className="headerText">Data from Form</p>
            </div>
            <div className="card-body">
                <h6 className="fStatues"><b>Form Statues:{""}</b></h6>
                <hr></hr>
                {/* <Divider variant="middle" /> */}
                <h6 className="fValue"><b>Form Value</b></h6>
                <label>First Name:</label><input type="text" 
                       value=" " id="sideInput1" className="sideInput"
                />
                <label>Last Name:</label>
                <input type="text" 
                       value={''} id="sideInput2" className="sideInput"
                />
                <label>Email Adress:</label>
                <input type="text" 
                       value={' '} id="sideInput3" className="sideInput"
                />
                <label>Phone Number:</label>
                <input type="number" 
                       value={' '} id="sideInput4" className="sideInput"
                />
                <label>Date of Birth:</label>
                <input type="text" 
                       value={' '} id="sideInput5" className="sideInput"
                /> 
                <label>Comments:</label>
                <input type="text" 
                       value={' '} id="sideInput6" className="sideInput"
                />                     
            </div>
        </div>
    )
}

export default Sideform
