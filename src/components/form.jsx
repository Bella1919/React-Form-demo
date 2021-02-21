import React,{useState} from 'react'
import './component.css'
import Submithome from './Submithome'
import Comments from './Comments'
import Date from './Date'
import Phonenumber from './Phonenumber'
import Emailaddress from './Emailaddress'
import Lastname from './Lastname'
import Firstname from './Firstname'


const Form=()=>{
    const [text,setText] = useState('')
    const getChange=(e)=>{
        setText(e.target.value)
        }
    
    return(
        <div className="card border-sencondary position-relative" id="cardstyle">
            <div className="card-header text-white bg-primary">
                <h5>Form</h5>
            </div>
            <div className="card-body">
                <p><b>Please fill in your details:</b></p>
                <br/>
                <form>
                    {/* first name */}
                    <Firstname 
                        inputChange={getChange} 
                        testInput={text.length>=2 && text.length<20 || text.length===0}
                    />
                    {/* last name */}
                    <Lastname />
                    {/* email address */}
                    <Emailaddress />
                    {/* phone number */}
                    <Phonenumber />
                    {/* date of birth */}
                    <Date />
                    {/* comments */}
                    <Comments />
                    {/* submit&home */}
                    <Submithome />
                </form>
            </div>
        </div>
    )
}



export default Form