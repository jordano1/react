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

const app = document.getElementById('app')

ReactDOM.render(template, app)