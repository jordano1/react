const app = document.getElementById('app')
class RandomizerApp extends React.Component{
    render(){
        const title = 'Jordan\'s randomizer app'
        const subtitle = 'randomizer app'
        const options = [1, 2, 3]
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Option />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <nav>
                <h1 class='title is-2'>title: {this.props.title}</h1>
                <h2 class='title is-4'>subtitle: {this.props.subtitle}</h2>            
            </nav>
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
                <button onClick={this.getVal}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
    constructor(props){
        super(props)
        //rebind this to removeAll method
        this.removeAll = this.removeAll.bind(this)
    }
    removeAll(){
        //doesn't work without super binding above in constructor
        console.log(this.props.options)
    }
    render(){
        return(
            <div>
            <button onClick={this.removeAll}>remove all</button>
                {this.props.options.map((option)=><p>{option}</p>)}
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

class AddOption extends React.Component{
    render(){
        return(
        <div>
           <p>addOption</p>
        </div>
        )
    }
}

ReactDOM.render(<RandomizerApp />, app)