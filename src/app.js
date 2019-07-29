class Decident extends React.Component{
    constructor(props){
        super(props)
        this.deleteOptions = this.deleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.addOption=this.addOption.bind(this)
        this.state={
            //default state
            options: []
        }
    }
    addOption(option){
        //if option value is empty
        if(!option){
            return 'enter valid value'
        //if what you are submitting is the same value as something within the array
        }else if(this.state.options.indexOf(option) > -1){
            let d = this.state.options.length - 1
            console.log(d)
            return 'the item: "' + this.state.options[d] +'", you have submitted is a duplicate'
        }

        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option)
            }
        })
    }
    //delete options
    deleteOptions(){
        this.setState(()=>{
            return{
                options: []
            }
        })
    }
    //add options
    handlePick(){
        let rand = Math.floor(Math.random() * this.state.options.length)
        let option = this.state.options[rand]
        return console.log(option)
    }
    //render components
    render(){
        const title = 'decidn\'t'
        const subtitle = 'put your mind into the hands of the beep boops'
        return(
            <div id='app'>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0 } handlePick={this.handlePick} />
                <Options 
                    options={this.state.options} 
                    deleteOptions={this.deleteOptions}
                    
                />
                <AddOption 
                    addOption={this.addOption} 
                />
            </div>
        )
    }
}


class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}
class Action extends React.Component{
    render(){
        return(
            <div>
                <p>Action component</p>
            </div>
        )
    }
}
//render new p tag for each option (set text, set key)
class Options extends React.Component{
  
    render(){
        return(
            <div>
                <p>options component here</p>
                <button onClick={this.props.deleteOptions}>remove all</button>
                {/*creating option component per map method call rendering the option within option*/}
                <p>{this.props.options.map((option)=><p>{<Option option={option}/>}</p>)}</p>
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                <p>option: {this.props.option} </p>
            </div>
        )
    }
}

// setup form with text input and submit button
// wireup onsubmit
// addOption->fetch value typed -> if value, then alert

class AddOption extends React.Component{
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

    this.setState(()=>{
        //if we have a property who's value comes from a variable with the same name you don't have to redundantly call error: error
        return{ error }
    })
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


const app = document.getElementById('app')
ReactDOM.render(<Decident />, app)