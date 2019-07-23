let app = document.getElementById('app')
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.plusOne = this.plusOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count: 0
        }
    }
    plusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count + 1
            }
        })
    }
    minusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count-1
            }
        })
    }
    reset(){
        this.setState(()=>{
            return{
                count: 0
            }
        })
    }
    render(){

        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, app)





// const app = document.getElementById('app')

// console.log('app.js is running!')
// const user = {
//     name:'Jordan',
//     age:18,
//     location: 'Utah'
// }
// const appData = {
//     'title': 'This is my title',
//     'subtitle': 'this is my subtitle',
//     'options': ['hi','ho']
// }

// function getLocation(location){
//     if (location) {
//         return <p>location: {location}</p>
//     }
// }
// const template = 
// <div>
//     <h1>{appData.title}</h1>
//     {appData.subtitle && <p>{appData.subtitle}</p>}
//    <p>{appData.options.length > 0 ? 'here are your options' : 'no options'}</p>
//     <ol>
//         <li>item one</li>
//         <li>item two</li>
//     </ol>
// </div>

// let count = 0
// const addOne = () => {
//     count++
//     renderCounterApp()
// }
// const minusOne = () =>{ 
//     count--
//     renderCounterApp()
// }
// const reset = () =>{ 
//     count = 0
//     renderCounterApp()
// }

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, app)
// }
// renderCounterApp()