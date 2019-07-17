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
    'options': ['hi', 'ho']
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
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateTwo, app);
};
renderCounterApp();
