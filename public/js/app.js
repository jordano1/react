'use strict';

var app = document.getElementById('app');

console.log('app.js is running!');
var user = {
    name: 'Jordan',
    age: 18,
    location: 'Utah'
};
var appData = {
    'title': 'This is my title',
    'subtitle': 'this is my subtitle',
    'options': []
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'location: ',
            location
        );
    }
}
var onFormSubmit = function onFormSubmit(e) {
    //e is a large selecter for several values and methods on the forms submission
    e.preventDefault();

    var option = e.target.elements.option.value;
    console.log(option);
    if (option) {
        appData.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

//create remove all button
//on click  -> wipe array -> rerender

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            appData.title
        ),
        appData.subtitle && React.createElement(
            'p',
            null,
            appData.subtitle
        ),
        React.createElement(
            'p',
            null,
            appData.options.length > 0 ? 'here are your options' : 'no options'
        ),
        React.createElement(
            'p',
            null,
            appData.options.length
        ),
        React.createElement(
            'p',
            null,
            appData.options
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'item one'
            ),
            React.createElement(
                'li',
                null,
                'item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Submit'
            )
        )
    );
    ReactDOM.render(template, app);
};
render();
