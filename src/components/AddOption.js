import React from 'react'

 export default class AddOption extends React.Component{
    //we setup the constructor props to pass down this.props.addOption
    constructor(props){
        super(props)
        this.formSubmit=this.formSubmit.bind(this)
        this.state ={
            //undefined by default, there will be no error is what this means
            error: undefined
        }
    }
  
    formSubmit(e){
        e.preventDefault()
        let option = e.target.elements.option.value.trim()
        const error = this.props.addOption(option)
    
        this.setState(()=>({ error }))
        if(!error){
            // clear input field of values if data is submitted
            e.target.elements.option.value = ''
        }
    }
    render(){
        return(
            <div>
                {//rendering the error
                    this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formSubmit}>
                <input type='text' name='option' />
                <button>add option</button>
                </form>
            </div>
        )
    }
  }
  