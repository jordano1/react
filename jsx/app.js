 function getLocation(location){
    if(location){
        return <p>location: {location}</p>;
    }
}

let user = {
    name: 'Jordan',
    age: 31,
    location: "Utah",
}

let template = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1> 
        {(user.age && user.age >= 18) && <p>Age {user.age}</p>}
        {getLocation(user.location)}
    </div>
    );
    
   
    
    
    let appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
    