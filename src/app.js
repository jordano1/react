const obj = {
    name: 'pierre',
    getName(){
        return this.name;
    }
}
const getName = obj.getName.bind({ name: 'Jordan'});

console.log(getName())

class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision'
        const subtitle = 'Poop ur pants in ur mom'
        const options = ['thing one', 'thing two', 'thing four']
        return(
            <div class="column">
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}
class Header extends React.Component {
    render() { 
        
        return( 
            <div>
                <h1 class='title is-2'>{this.props.title}</h1>
                <h2 class='title is-4'>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

//add remove all button
//setup handleremoveall -> alert some message
//setup onClick to fire method

class Options extends React.Component {
    constructor(props){
        //this.props
        super(props)
        this.removeAll = this.removeAll.bind(this);

    }
    removeAll(){
        console.log(this.props.options)
    }
    render(){
        return(
            <div>
                
            <button onClick={this.removeAll}>Remove all</button>
                {this.props.options.map((option)=><Option  option={option} /> )}
            </div>
        )
    }
}
class Option extends React.Component {
    render(){
        return(
            <div>
                {this.props.option}
            </div>
        )
    }
}

//1 setup the form with text input and submit button
//2 wire up onSubmit
//3. handleaddoption -> fetch value typed -> if value, then alert value

class AddOption extends React.Component {
    addOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim()
        alert(option)
    }
    render(){
        return(
            <div>
              <form onSubmit={this.addOption}>
                <input type='string' name='option'/>
                <button>submit option</button>
              </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))