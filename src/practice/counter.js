//setup default prop value to 0
let app = document.getElementById('app')
let count=0;

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state={
            count: 0
        }
    }
    addOne(){
        this.setState((prevState)=>{
            return{
            count: prevState.count + 1
            }
        });        
    }
    // addOne(){
    //     this.setState((prevState)=>{
    //         return{
    //             count: ++count
    //         }
    //     });        
    // }
    
    minusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count - 1
            }
        })
    }
    reset(){
       this.setState(() => {
        return{
            count:0
        }
       })
    }
    render(){
        return(
            <div>
                <h1 class='title'>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}
//create 3 methods: addOne minusOne reset


ReactDOM.render(<Counter />, app)
// const appRoot = document.getElementById('app')
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }


// const renderCounterApp = () => {
//   const templateTwo = (
//     <div class="count">
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} className="button">+1</button>
//       <button onClick={minusOne} className="button">-1</button>
//       <button onClick={reset} className="button">Reset</button>
//     </div>
//     );
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();


