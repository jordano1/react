console.log('app.js is running!')
const user = {
    name:'Jordan',
    age:18,
    location: 'Utah'
}
const appData = {
    'title': 'This is my title',
    'subtitle': 'this is my subtitle',
    'options': ['hi','ho']
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
let count = 0
const addOne = () => console.log('addOne')
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={}>+1</button>
    </div>
)
console.log(templateTwo)
const app = document.getElementById('app')

ReactDOM.render(templateTwo, app)
