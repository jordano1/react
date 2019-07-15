<<<<<<< HEAD
const app = document.getElementById('app')



class RandomizerApp extends React.Component{
    constructor(props){
        super(props)
        this.deleteAll = this.deleteAll.bind(this)
        this.random = this.random.bind(this)
        this.addOption = this.addOption.bind(this)
        this.deleteOption = this.deleteOption.bind(this)
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
       this.setState((prevState)=>({options: prevState.options.concat(option)}))
    }
    deleteAll() {
        this.setState(()=>({options:[]}))
    }
    deleteOption(removeOption){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>removeOption !== option)
        }))
    }
    render(){
        const title = 'Jordan\'s randomizer app'
        const subtitle = 'randomizer app'

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                hasOptions={this.state.options.length > 0} 
                    random={this.random}
                />
                <Options 
                    options={this.state.options} 
                    hasOptions={this.state.options.length > 0} 
                    deleteAll={this.deleteAll}
                    deleteOption={this.deleteOption}
                />
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


const Options = (props) =>{
    return(
        <div>
        <button onClick={props.deleteAll} disabled={!props.hasOptions}>Delete all </button>
            {
                props.options.map((option)=> (
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
        <div>
            {props.optionText}
            <button 
                onClick={(e)=>{
                    props.deleteOption(props.optionText)
                }}
            >
            <p>Remove <span style="margin:15px">{props.optionText}</span></p>
            </button>
        </div>
    )
}
=======
console.log('app.js is running!')
const user = {
    name:'Jordan',
    age:18,
    location: 'Utah'
}
const appData = {
    'title': 'This is my title',
    'subtitle': 'this is my subtitle',
    'options': ["hi","ho"]
}

function getLocation(location){
    if (location) {
        return <p>location: {location}</p>
    }
}
const template = 
<div>
    <h1>{appData.title}</h1>
    {appData.subtitle && <p>{appData.subtitle}</p>}
   <p>{appData.options.length > 0 ? 'here are your options' : 'no options'}</p>
    <ol>
        <li>item one</li>
        <li>item two</li>
    </ol>
</div>

const templateTwo = 
<div>
    <h1>{user.name ? user.name : 'anonymous'}</h1> 
    {(user.age && user.age >= 18) && <p>age {user.age}</p>}

    {getLocation(user.location)}
</div>
>>>>>>> f6562a107c027b69ccc69c2078408e16a61fcdf8

const app = document.getElementById('app')

ReactDOM.render(template, app)
