import React from 'react'
  const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
  }
    //can setup default props in components
    Header.defaultProps = {
        title: 'Decidn\'nt'
    }
  export default Header