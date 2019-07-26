class Decident extends React.Component{
    constructor(props){
        super(props)
        this.deleteOptions = this.deleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state ={
            options: ['one', 'two', 'three']
        }
    }
    addOption(option){
        console.log('this is addOption parent method')
        console.log(option)
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
        const options = [1, 2, 3, 'thing one', 'thing two', 'thing three']
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
    handlePick(){
        console.log('yo')
    }
    render(){
        return(
            <div>
                <p>Action</p>
                <button onClick={this.handlePick}>what should I do?</button>
            </div>
        )
    }
}
//render new p tag for each option (set text, set key)
class Options extends React.Component{
    constructor(props){
        super(props)
        this.removeAll = this.removeAll.bind(this)
    }
    removeAll(){
        console.log(this.props.options)
    }
    render(){
        return(
            <div>
                <p>options component here</p>
                <button onClick={this.removeAll}>remove all</button>
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
        this.formSubmit = this.formSubmit.bind(this)
    }
   formSubmit(e){
    e.preventDefault()
    let option = e.target.elements.option.value.trim()
    if(option){
        this.props.addOption(option)
    }
}
    render(){
        return(
            <div>
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