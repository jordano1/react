import React from 'react'

const Option = (props) =>{
    return(
        <div className='option'>
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
export default Option  