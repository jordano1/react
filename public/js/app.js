'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Jordan'
    ),
    React.createElement(
        'p',
        null,
        'INFORMATION HERE'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Jordan'
    ),
    React.createElement(
        'p',
        null,
        'Age 31'
    ),
    React.createElement(
        'p',
        null,
        'Utah'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
