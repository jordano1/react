let visibility = false
const toggle = () =>{
    visibility = !visibility
    render()
}
app = document.getElementById('app')

const render = () =>{
    const visiblility =(
        <div>
            <h2>vis toggle</h2>
            <button onClick={toggle}>{visibility ? 'hide details' : 'show details'}</button>    
            {visibility && (
                <div><p>hey dude</p></div>
            )}
        </div>
    )
    ReactDOM.render(visiblility, app)
}
render()