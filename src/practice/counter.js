<<<<<<< HEAD
=======
//setup default prop value to 0
//take in prop counter
let app = document.getElementById('app')
let count=0;

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state={
            count: props.count
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
            count: props.count
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
Counter.defaultProps = {
    count: 0
}

//passing defaultProps as a object var 
ReactDOM.render(<Counter count={-12} />, app)
>>>>>>> 92e22da7a120e3d1566be2c3abeb54ffa7a20f07
