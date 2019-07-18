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
function removeAll(e) {
    appData.options = [];
    render();
}
var decider = function decider() {
    var rando = Math.floor(Math.random() * appData.options.length);
    var option = appData.options[rando];
    alert(option);
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            appData.title
        ),
        React.createElement(
            'h2',
            null,
            appData.subtitle
        ),
        React.createElement(
            'p',
            null,
            appData.options.length > 0 ? 'here are your options' : 'no options'
        ),
        React.createElement(
            'button',
            { onClick: decider, disabled: appData.options.length === 0 },
            'what should i do'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'remove all'
        ),
        React.createElement(
            'ul',
            null,
            appData.options.map(function (option) {
                return React.createElement(
                    'li',
                    null,
                    'option ',
                    option
                );
            })
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
