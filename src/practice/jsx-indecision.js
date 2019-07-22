const app = document.getElementById('app')

console.log('app.js is running!')
const user = {
    name:'Jordan',
    age:18,
    location: 'Utah'
}
const appData = {
    'title': 'This is my title',
    'subtitle': 'this is my subtitle',
    'options': []
}

function getLocation(location){
    if (location) {
        return <p>location: {location}</p>
    }
}
const onFormSubmit = (e) =>{
    //e is a large selecter for several values and methods on the forms submission
    e.preventDefault();

    const option = e.target.elements.option.value;
    console.log(option)
    if (option) {
        appData.options.push(option)
        e.target.elements.option.value = ''
        render()
    }
}

//create remove all button
//on click  -> wipe array -> rerender
function removeAll(e){
    appData.options = []
    render()
}
const decider = () =>{
    const rando = Math.floor(Math.random() * appData.options.length);
    const option = appData.options[rando]
    alert(option)
}

const render = () =>{
    const template = (
        <div>
        <h1>{appData.title}</h1>
        <h2>{appData.subtitle}</h2>

        <p>{appData.options.length > 0 ? 'here are your options' : 'no options'}</p>
        <button onClick={decider} disabled={appData.options.length === 0}>what should i do</button>
        <button onClick={removeAll}>remove all</button>
        <ul>
            {appData.options.map((option)=><li>option {option}</li>)}
        </ul>
        
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Submit</button>
   
         
        </form>
       
    </div>
    )
    ReactDOM.render(template, app)
}
render()