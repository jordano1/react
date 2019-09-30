import React from 'react'
import Option from './Option'
const Options = (props) =>{
    return (
        <div>
            <button onClick={props.deleteOptions}>remove all</button>
            
            {//add option message when no options are added
                props.options.length === 0 && <p>Please add an option to get started</p>}
  
            {/*creating option component per map method call rendering the option within option*/}
            {props.options.map((option)=>(
                <Option 
                    key={option}
                    optionText={option}
                    deleteOption={props.deleteOption}    
                />
            ))
        }
        </div>
    )
}

export default Options