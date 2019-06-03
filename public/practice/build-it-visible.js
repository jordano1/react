

let display = false
const toggle = () =>{
    //takes display and equals it to it's true opposite which true = false false = true.
    display = !display
    render();
}
const app = document.getElementById('app')
const render = () =>{
    const template = (
        <div>
            <h1 class="title is-3">display content jsx</h1>
            <button onClick={toggle}>{display ? 'show nothing' : 'show something'}</button>
        {display && 
            <div><p class="title is-5">These are the deets you were seeking</p></div>
        }



        </div>
    )
    ReactDOM.render(template, app);
}
render()