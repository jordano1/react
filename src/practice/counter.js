// count - setup default prop value to 0
//add localstorage, will check values, use 'isNaN' to check if is not a number.
let app = document.querySelector('#app')
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
    componentDidMount(){
        const stringCount = localStorage.getItem('count')
        const count = parseInt(stringCount, 10)
        if (!isNaN(count)) {
            this.setState(()=>({count: count}))
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count) {
            console.log(this.state.count)
            localStorage.setItem('count', this.state.count)
            //console.log(this.state.count)
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
//set prop count (not necessary so commented out)
// Counter.defaultProps = {
//     count:0
// }
//put default prop count into component, then set the state to 5 or props idk
ReactDOM.render(<Counter count={5} />, app)