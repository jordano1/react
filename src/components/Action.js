import React from 'react'
const Action = (props) =>{
    return(
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                randomize
            </button>
        </div>
    )
  }

  export default Action