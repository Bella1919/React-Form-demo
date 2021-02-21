import React,{useState} from 'react'

const Emailaddress = () => {
    const [text3,setText3] =useState('')
    const getChange3=(e)=>{
        setText3(e.target.value)
        }
    const emailInput=(text3.length===0||text3.length>6) 
    return (
        <div>
            <label htmlFor="eaddress">Email Address</label>
            <input type="text" 
                   className="form-control fname" 
                   value={text3}
                   placeholder="xxxx@xxxx.com"
                   onChange={getChange3}
            />
            <p className="inputUnder"
               style={{backgroundColor:(emailInput?"":"pink")}}
            >
               {emailInput?"":"Please input valid emaill address"}
            </p>
        </div>
    )
}

export default Emailaddress
