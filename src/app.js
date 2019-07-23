class Decident extends React.Component{
    constructor(props){
        super(props)
        this.deleteOptions = this.deleteOptions.bind(this)
        this.state ={
            options: [1, 2, 3]
        }
    }
    //handleDeleteOptions
    deleteOptions(){
        this.setState(()=>{
            return{
                options: [],
            }
        })
    }
    render(){
        const title = 'decidn\'t'
        const subtitle = 'put your mind into the hands of the beep boops'
        return(
            <div id='app'>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0 } />
                <Options 
                    options={this.state.options} 
                    deleteOptions={this.deleteOptions}
                />
                <AddOption />
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
                <button 
                disabled={!this.props.hasOptions} 
                onClick={this.handlePick}
            >what should I do?</button>
            </div>
        )
    }
}
//render new p tag for each option (set text, set key)
class Options extends React.Component{
    constructor(props){
        super(props)
    }
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
   formSubmit(e){
    e.preventDefault()
    let options = e.target.elements.option.value.trim()
    if (!options) {
        options = 'yo nothing here boi'
    }
    console.log(options)
   }
    render(){
        return(
            <div>
               <form onSubmit={this.formSubmit}>
               <input type='text' name='option' />
               <button></button>
               </form>
            </div>
        )
    }
}


const app = document.getElementById('app')
ReactDOM.render(<Decident />, app)