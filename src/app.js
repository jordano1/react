class Decident extends React.Component{
    render(){
        const title = 'decidn\'t'
        const subtitle = 'put your mind into the hands of the beep boops'
        const options = [1, 2, 3, 'thing one', 'thing two', 'thing three']
        return(
            <div id='app'>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption options={options} />
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