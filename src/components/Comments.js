import React from 'react'

const Comments = () => {
    return (
        <div>
           <label htmlFor="comment">Comments</label><br></br>
           <textarea name="comment" id="comment" cols="73" rows="3" 
              placeholder="Please enter your comments here"></textarea> 
        </div>
    )
}

export default Comments
