
//create app object title/subtitle
const app = {
  title: 'Indecision App',
  subtitle:'Put a little entropy in your life',
  options:[],
}
const formSubmit = (e) =>{
  //stops ajax call for page refresh
  e.preventDefault();
  //set option as value of input field (element.target.input.string of input)
  const option = e.target.elements.option.value;
  //check if option is set
  if(option){
    //if set push the form value (option) into options array
    app.options.push(option);
    //set input field value empty
    e.target.elements.option.value = '';
    render();
  }
} //formSubmit

const removeAll = () =>{
  app.options = [];
  render();
}
const randomize = () =>{
  const rand = Math.floor(Math.random() * app.options.length);
  //random number is the index of the array, it will pop up the value using the index with alert
  const option = app.options[rand];
  alert(option)
  
}

const appRoot = document.getElementById('app');
const render = () =>{
  const template = (

    <div class="container">
      <div class="columns">
        <div class="column is-full">
          <h1 class="title">
          {app.title}
          </h1>
          <h2 class="subtitle">
          {app.subtitle && <p>{app.subtitle}</p>}
          </h2>
          <p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
          <p>{app.options.length}</p>
          <button disabled={app.options.length === 0} onClick={randomize}>Decide for me</button>
          <button onClick={removeAll}>Remove options</button>
          {
            // numbers.map((number)=>{
            //   return <p>number: {number}</p>
            // })
          }
          <ul>
            {/* mapping app.options to option, and putting the value of options in an li */}
            {app.options.map((option)=><li>{option}</li>)}
          </ul>
          <form onSubmit={formSubmit}>
            <div class="field">
              <div class="control">
                <input class="input is-primary" name="option" type="text" placeholder="Primary input"/>
              </div>
            </div>
            <button>Add Option</button>
          </form>
        </div>
      </div>
    </div>
  );
  
  ReactDOM.render(template, appRoot)
}
render();