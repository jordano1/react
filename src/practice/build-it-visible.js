const app = document.getElementById('app')
class TextToggle extends React.Component{
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this)
      this.state = {
          visibility: false 
      }
    }
    toggle(){
        //prevState parameter takes out requiring to type in the return below 'this.state.visibility'
        this.setState((prevState)=>{
            return{
                visibility: prevState.visibility=!prevState.visibility
            }
        })
    }
    render(){ 
        return(
            <div>
                <button onClick={this.toggle}>{this.state.visibility ? 'hide stuff' : 'display stuff'}</button>
                {this.state.visibility&&
                    <div>
                        <p>yo this will display if true</p>
                    </div>
                }
            </div>
        )
    }
}


ReactDOM.render(<TextToggle/>, app)






// let display = false
// const toggle = () =>{
//     //takes display and equals it to it's true opposite which true = false false = true.
//     display = !display
//     render();
// }
// const app = document.getElementById('app')
// const render = () =>{
//     const template = (
//         <div>
//             <h1 class="title is-3">display content jsx</h1>
//             <button onClick={toggle}>{display ? 'show nothing' : 'show something'}</button>
//         {display && 
//             <div><p class="title is-5">These are the deets you were seeking</p></div>
//         }



//         </div>
//     )
//     ReactDOM.render(template, app);
// }
// render()