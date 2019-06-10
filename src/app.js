//stateless functional component

const app = document.getElementById('app')

class RandomizerApp extends React.Component{
    constructor(props){
        super(props)
        this.removeAll = this.removeAll.bind(this)
        this.random = this.random.bind(this)
        this.addOption = this.addOption.bind(this)
        this.state={
            options: props.options
        }
    }
    random(){
        const rand = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[rand]
        alert(option)
    }
    addOption(option){
        if(!option){
            return 'enter valid value';
        }else if(this.state.options.indexOf(option) > -1){
            return 'this option exists'
        }
        //setState calls render
       this.setState((prevState)=>{
           return{
               options: prevState.options.concat(option)
           }
       })
    }
    removeAll() {
       this.setState(()=>{ 
           return{
               options: []
           }
       })
    }
    render(){
        const title = 'Jordan\'s randomizer app'
        const subtitle = 'randomizer app'

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                hasOptions={this.state.options.length > 0} 
                removeAll={this.removeAll}
                    options={this.state.options} 
                    random={this.random}
                />
                <Options 
                    options={this.state.options} 
                    hasOptions={this.state.options.length > 0} 
                    removeAll={this.removeAll}
                />
                <Option/>
                <AddOption
                    addOption={this.addOption}
                />
            </div>
        )
    }
}

RandomizerApp.defaultProps = {
    options:[]
}

const Header = (props) =>{
    return(
        <div>
            <h1 class='title is-2'>{props.title}</h1>
            {props.subtitle && <h2 class='title is-4'>{props.subtitle}</h2>}
        </div>
    )
}
Header.defaultProps={
    title: 'anonymous'
}
// class Header extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1 class='title is-2'>{this.props.title}</h1>
//                 <h2 class='title is-4'>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action =(props)=>{
    return(
        <div>
            <button
                onClick={props.random}
                disabled={!props.hasOptions}
            >
                random
            </button>
        </div>
    )
}
// class Action extends React.Component{
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.random}>random</button>
//                 <button onClick={this.props.removeAll} disabled={!this.props.hasOptions}>
//                     remove all
//                 </button>
//             </div>
//         )
//     }
// }

const Options = (props) =>{
    return(
        <div>
            {props.options.map((option)=><p>{option}</p>)}
            <button onClick={props.removeAll} disabled={!props.hasOptions}>remove all </button>
        </div>
    )
}
// class Options extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.options.map((option)=><p>{option}</p>)}
//                 <button onClick={this.props.removeAll} disabled={!this.props.hasOptions}>remove all </button>
//             </div>
//         )
//     }
// }

const Option = () =>{
    return(
        <div>
        </div>
    )
}
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//             </div>
//         )
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.addOption = this.addOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    addOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        //option is just the value submitted in the form
        //this.props.addOption(option) says one of 2 things
        //either enter valid value
        //or this option exists
        //this.props.addOption(option)
        const error = this.props.addOption(option)
        this.setState(()=>{
            return{ error }
        })
    }
    render(){
        return(
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.addOption}>

                <input type='text' name='option'/>
                <button>add Option</button>
            </form>
        </div>
        )
    }
}

//props passed in as first argument
//if a class based component it would be this.props.name
// const User = (props) =>{
//     return(
//         <div>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }

ReactDOM.render(<RandomizerApp />, app)
