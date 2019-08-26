import React from 'react'

export default (props) =>{
    return(
        <div class='option'>
            <p>
                option: {props.optionText} 
                <button
                onClick={()=>{
                    props.deleteOption(props.optionText)
                }}>
                    delete option
                </button>
            </p>
            
        </div>
    )
  }
  