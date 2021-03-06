'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Decident = function (_React$Component) {
    _inherits(Decident, _React$Component);

    function Decident() {
        _classCallCheck(this, Decident);

        return _possibleConstructorReturn(this, (Decident.__proto__ || Object.getPrototypeOf(Decident)).apply(this, arguments));
    }

    _createClass(Decident, [{
        key: 'render',
        value: function render() {
            var title = 'decidn\'t';
            var subtitle = 'put your mind into the hands of the beep boops';
            var options = [1, 2, 3, 'thing one', 'thing two', 'thing three'];
            return React.createElement(
                'div',
                { id: 'app' },
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, null),
                React.createElement(Options, { options: options }),
                React.createElement(AddOption, { options: options })
            );
        }
    }]);

    return Decident;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'handlePick',
        value: function handlePick() {
            console.log('yo');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Action'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handlePick },
                    'what should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);
//render new p tag for each option (set text, set key)


var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this4.removeAll = _this4.removeAll.bind(_this4);
        return _this4;
    }

    _createClass(Options, [{
        key: 'removeAll',
        value: function removeAll() {
            console.log(this.props.options);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'options component here'
                ),
                React.createElement(
                    'button',
                    { onClick: this.removeAll },
                    'remove all'
                ),
                React.createElement(
                    'p',
                    null,
                    this.props.options.map(function (option) {
                        return React.createElement(
                            'p',
                            null,
                            React.createElement(Option, { option: option })
                        );
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'option: ',
                    this.props.option,
                    ' '
                )
            );
        }
    }]);

    return Option;
}(React.Component);

// setup form with text input and submit button
// wireup onsubmit
// addOption->fetch value typed -> if value, then alert

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'formSubmit',
        value: function formSubmit(e) {
            e.preventDefault();
            var options = e.target.elements.option.value.trim();
            if (!options) {
                options = 'yo nothing here boi';
            }
            console.log(options);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.formSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement('button', null)
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var app = document.getElementById('app');
ReactDOM.render(React.createElement(Decident, null), app);
