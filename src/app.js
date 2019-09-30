import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption'
import Action from './components/Action'
import Header from './components/Header'
import Options from './components/Options'
class Decident extends React.Component{
    constructor(props){
        super(props)
        this.deleteOptions = this.deleteOptions.bind(this)
        this.deleteOption=this.deleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.addOption=this.addOption.bind(this)
        this.state={
            //default state
            options: []
        }
    }
    componentDidMount(){
        try {
            //getting localstorage array
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            
            if(options){
                this.setState(()=>({options}))
            }
        } catch (e) {
            console.log('catch error: ', e)
            //do nothing for now
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        //setting localstorage array with component array
    
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount(){
        // not really used
        console.log('unmount')
    }
  
    deleteOptions(){
        this.setState(()=>({options: []}))
    }
    deleteOption(removeOption){
       this.setState((prevState)=>({
           options: prevState.options.filter((option)=>removeOption !== option)
       }))
    }
    addOption(option){
        //if option value is empty
        if(!option){
            return 'enter valid value'
        //if what you are submitting is the same value as something within the array
        }else if(this.state.options.indexOf(option) > -1){
            let lastOption = this.state.options.length - 1
            return 'the item: "' + this.state.options[lastOption] +'", you have submitted is a duplicate'
        }
        this.setState((prevState)=>({options: prevState.options.concat(option)}))
    }
    //delete options
    //implicitely return an object({})
   
    //add options
    handlePick(){
        let rand = Math.floor(Math.random() * this.state.options.length)
        let option = this.state.options[rand]
        return console.log(option)
    }
    //render components
    render(){
        const subtitle = 'put your mind into the hands of the beep boops'
        return(
            <div id='app'>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0 } handlePick={this.handlePick} />
                <Options 
                    options={this.state.options} 
                    deleteOptions={this.deleteOptions}
                    deleteOption={this.deleteOption}
                />
                <AddOption 
                    addOption={this.addOption} 
                    hasOptions={this.state.options.length > 0}
                />
            </div>
        )
    }
  }

  const app = document.getElementById('app')
  ReactDOM.render(<Decident />, app)