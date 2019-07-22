class Decident extends React.Component{
    render(){
        const title = 'decidn\'t'
        const subTitle = 'put your mind into the hands of my nips'
        const options = [1, 2, 3]
        return(
            <div id='app'>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}
class Action extends React.Component{
    render(){
        return(
            <div>
                <p>Action</p>
            </div>
        )
    }
}
class Options extends React.Component{
    render(){
        return(
            <div>
                {this.props.options.map((option)=><p><Option optionText={option} /></p>)}
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                <p>option: {this.props.optionText}</p>
            </div>
        )
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
                <p>addOption</p>
            </div>
        )
    }
}


const app = document.getElementById('app')
ReactDOM.render(<Decident />, app)