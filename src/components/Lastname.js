import React,{useState} from 'react'

const Lastname = () => {
    const [text2,setText2] =useState('')
    const getChange2=(e)=>{
        setText2(e.target.value)
        }
    const testInput2=(text2.length>=2 && text2.length<20 || text2.length===0)
    return (
        <div>
            <label htmlFor="lname">Last Name</label>
            <input type="text" 
                   className="form-control fname" 
                   value={text2}
                   placeholder="Your last name"
                   onChange={getChange2}
            />
            <p className="inputUnder" 
                style={{backgroundColor:(testInput2?"":"pink")}}
            >
                {testInput2?"":"2-20 characters required"}
            </p>
        </div>
    )
}

export default Lastname
