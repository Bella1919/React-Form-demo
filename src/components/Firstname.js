// import PropTypes from 'prop-types'
const Firstname = ({text,inputChange,testInput}) => {
    
    return (
        <div>
            <label htmlFor="fname">First Name</label>
            <input type="text" 
                   className="form-control fname" 
                   onChange={inputChange}
                   placeholder={"Your first name"}
            /> 
            
            <p className="inputUnder" 
                style={{backgroundColor:(testInput?"":"pink")}}
            >
                {testInput?"":"2-20 characters required"}
            </p>
            {/* <p>
                {text}
            </p> */}
        </div>
    )
}
// Firstname.defaultProps={
//     value:''
// }
// Firstname.propTypes={
//     value:PropTypes.string.isRequired,
//     onChange:PropTypes.func
// }


export default Firstname
