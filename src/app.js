class Decident extends React.Component{
    constructor(props){
        super(props)
        this.deleteOptions = this.deleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.addOption=this.addOption.bind(this)
        this.deleteOption=this.deleteOption.bind(this)
        this.state={
            //default state
            options: props.options
        }
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
            let d = this.state.options.length - 1
            console.log(d)
            return 'the item: "' + this.state.options[d] +'", you have submitted is a duplicate'
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
        const title = 'decidn\'t'
        const subtitle = 'put your mind into the hands of the beep boops'
        return(
            <div id='app'>
                <Header title={title} subtitle={subtitle} />
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

Decident.defaultProps = {
    options: []
}
//can setup default props in components
// Header.defaultProps = {
//     title: 'some default!'
// }
const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}



const Action = (props) =>{
    return(
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                randomize
            </button>
        </div>
    )
}

const Options = (props) =>{
    return(
        <div>
            <p>options component here</p>
            <button onClick={props.deleteOptions}>remove all</button>
            {/*creating option component per map method call rendering the option within option*/}
            {props.options.map((option)=>(
                    <Option 
                        optionText={option}
                        deleteOption={props.deleteOption}    
                    />
                ))
            }
        </div>
    )
}

const Option = (props) =>{
    return(
        <div class='option'>
            <p>
                option: {props.optionText} 
                <button
                onClick={(e)=>{
                    props.deleteOption(props.optionText)
                }}>delete option</button>
            </p>
            
        </div>
    )
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

    this.setState(()=>({ error }))
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

// const User = (props) => {
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

const app = document.getElementById('app')
ReactDOM.render(<Decident />, app)