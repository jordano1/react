let app = document.querySelector('#app')
class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state={
            visibility: false
        }
    }
    toggle(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return(
        <div>
            <h2>vis toggle</h2>
            <button onClick={this.toggle}>{this.state.visibility ? 'hide details' : 'show details'}</button>
            {this.state.visibility && (
                <div><p>hey dude</p></div>
            )}
        </div>
        )
    }
}

ReactDOM.render(<Visibility />, app)