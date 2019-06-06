'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = document.getElementById('app');

var RandomizerApp = function (_React$Component) {
    _inherits(RandomizerApp, _React$Component);

    function RandomizerApp(props) {
        _classCallCheck(this, RandomizerApp);

        //bind this to function 
        var _this = _possibleConstructorReturn(this, (RandomizerApp.__proto__ || Object.getPrototypeOf(RandomizerApp)).call(this, props));

        _this.deleteOptions = _this.deleteOptions.bind(_this);
        _this.addOptions = _this.addOptions.bind(_this);
        _this.state = {
            options: [1, 2, 3, 4, 5]
        };
        return _this;
    }

    _createClass(RandomizerApp, [{
        key: 'addOptions',
        value: function addOptions() {
            this.setState(function () {});
        }
        //handledeleteoptions

    }, {
        key: 'deleteOptions',
        value: function deleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
        //handlepick - pass down to action and setup onClick - bind here
        //randomly pick an option and alert it

    }, {
        key: 'render',
        value: function render() {
            var title = 'Randomizer App';
            var subtitle = 'Add a little entropy in your life';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, addOptions: this.addOptions }),
                React.createElement(Option, null),
                React.createElement(Options, { options: this.state.options,
                    deleteOptions: this.deleteOptions
                })
            );
        }
    }]);

    return RandomizerApp;
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
                    { 'class': 'title is-2' },
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    { 'class': 'title is-4' },
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
        key: 'getVal',
        value: function getVal() {
            console.log('pressed');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        onClick: this.getVal,
                        disabled: !this.props.hasOptions
                    },
                    'Action button'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.deleteOptions },
                    'removeAll'
                ),
                this.props.options.map(function (option) {
                    return React.createElement(
                        'p',
                        null,
                        option
                    );
                })
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
                this.props.options
            );
        }
    }]);

    return Option;
}(React.Component);

ReactDOM.render(React.createElement(RandomizerApp, null), app);
