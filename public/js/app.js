'use strict';

var appRoot = document.getElementById('app');
var count = 0;
var addOne = function addOne() {
  count++;
  console.log('addOne', count);
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  console.log('minusOne', count);
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  console.log('reset', count);
  renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    { 'class': 'count' },
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne, className: 'button' },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne, className: 'button' },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset, className: 'button' },
      'Reset'
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
