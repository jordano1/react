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

const render = () =>{
    const template = (
        <div>
        <h1>{appData.title}</h1>
            {appData.subtitle && <p>{appData.subtitle}</p>}
        <p>{appData.options.length > 0 ? 'here are your options' : 'no options'}</p>
        <p>{appData.options.length}</p>
        <p>{appData.options}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Submit</button>
        </form>
        
    </div>
    )
    ReactDOM.render(template, app)
}
render()