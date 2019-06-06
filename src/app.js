const app = document.getElementById('app')

class RandomizerApp extends React.Component{
    constructor(props){
        super(props)
        //bind this to function 
        this.deleteOptions = this.deleteOptions.bind(this)
        this.addOptions = this.addOptions.bind(this)
        this.state = {
            options: [1, 2, 3, 4, 5,]
        }
    }
    addOptions(){
        this.setState(()=>{

        })
    }
    //handledeleteoptions
    deleteOptions() {
        this.setState(()=>{
            return{options:[]}
        })
    }
    //handlepick - pass down to action and setup onClick - bind here
    //randomly pick an option and alert it
    render(){
        let title = 'Randomizer App'
        let subtitle = 'Add a little entropy in your life'
        return(
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action hasOptions={this.state.options.length > 0}  addOptions={this.addOptions} />
            <Option />
            <Options options={this.state.options}
            deleteOptions={this.deleteOptions}
            />
           
        </div>
        )
    }
}


class Header extends React.Component{
    render(){
        return(
            <div>
                <h1 class='title is-2'>{this.props.title}</h1>
                <h2 class='title is-4'>{this.props.subtitle}</h2>
            </div>
        )
    }
}
class Action extends React.Component{
    getVal(){
        console.log('pressed')
    }
    render(){
        return(
            <div>
                <button 
                onClick={this.getVal}
                disabled={!this.props.hasOptions}
                >

                Action button
                </button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
               <button onClick={this.props.deleteOptions}>removeAll</button>
               {this.props.options.map((option) => <p>{option}</p>)}
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.options}
            </div>
        )
    }
}

ReactDOM.render(<RandomizerApp/>, app)