'use strict';

//create app object title/subtitle
var app = {
  title: 'Indecision App',
  subtitle: 'Put a little entropy in your life',
  options: []
};
var formSubmit = function formSubmit(e) {
  //stops ajax call for page refresh
  e.preventDefault();
  //set option as value of input field (element.target.input.string of input)
  var option = e.target.elements.option.value;
  //check if option is set
  if (option) {
    //if set push the form value (option) into options array
    app.options.push(option);
    //set input field value empty
    e.target.elements.option.value = '';
    render();
  }
}; //formSubmit

var removeAll = function removeAll() {
  app.options = [];
  render();
};
var randomize = function randomize() {
  var rand = Math.floor(Math.random() * app.options.length);
  //random number is the index of the array, it will pop up the value using the index with alert
  var option = app.options[rand];
  alert(option);
};

var appRoot = document.getElementById('app');
var render = function render() {
  var template = React.createElement(
    'div',
    { 'class': 'container' },
    React.createElement(
      'div',
      { 'class': 'columns' },
      React.createElement(
        'div',
        { 'class': 'column is-full' },
        React.createElement(
          'h1',
          { 'class': 'title' },
          app.title
        ),
        React.createElement(
          'h2',
          { 'class': 'subtitle' },
          app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
          )
        ),
        React.createElement(
          'p',
          null,
          app.options.length > 0 ? 'here are your options' : 'no options'
        ),
        React.createElement(
          'p',
          null,
          app.options.length
        ),
        React.createElement(
          'button',
          { disabled: app.options.length === 0, onClick: randomize },
          'Decide for me'
        ),
        React.createElement(
          'button',
          { onClick: removeAll },
          'Remove options'
        ),
        React.createElement(
          'ul',
          null,
          app.options.map(function (option) {
            return React.createElement(
              'li',
              null,
              option
            );
          })
        ),
        React.createElement(
          'form',
          { onSubmit: formSubmit },
          React.createElement(
            'div',
            { 'class': 'field' },
            React.createElement(
              'div',
              { 'class': 'control' },
              React.createElement('input', { 'class': 'input is-primary', name: 'option', type: 'text', placeholder: 'Primary input' })
            )
          ),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
render();
