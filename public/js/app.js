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

        var _this = _possibleConstructorReturn(this, (RandomizerApp.__proto__ || Object.getPrototypeOf(RandomizerApp)).call(this, props));

        _this.deleteAll = _this.deleteAll.bind(_this);
        _this.random = _this.random.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.deleteOption = _this.deleteOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(RandomizerApp, [{
        key: 'random',
        value: function random() {
            var rand = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[rand];
            alert(option);
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return 'enter valid value';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'this option exists';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'deleteAll',
        value: function deleteAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'deleteOption',
        value: function deleteOption(removeOption) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return removeOption !== option;
                    })
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Jordan\'s randomizer app';
            var subtitle = 'randomizer app';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    random: this.random
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    hasOptions: this.state.options.length > 0,
                    deleteAll: this.deleteAll,
                    deleteOption: this.deleteOption
                }),
                React.createElement(AddOption, {
                    addOption: this.addOption
                })
            );
        }
    }]);

    return RandomizerApp;
}(React.Component);

RandomizerApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            { 'class': 'title is-2' },
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            { 'class': 'title is-4' },
            props.subtitle
        )
    );
};
Header.defaultProps = {
    title: 'anonymous'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.random,
                disabled: !props.hasOptions
            },
            'random'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.deleteAll, disabled: !props.hasOptions },
            'Delete all '
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                optionText: option,
                deleteOption: props.deleteOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.deleteOption(props.optionText);
                }
            },
            React.createElement(
                'p',
                null,
                'Remove ',
                React.createElement(
                    'span',
                    { style: 'margin:15px' },
                    props.optionText
                )
            )
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'addOption',
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            //option is just the value submitted in the form
            //this.props.addOption(option) says one of 2 things
            //either enter valid value
            //or this option exists
            //this.props.addOption(option)
            var error = this.props.addOption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

//props passed in as first argument
//if a class based component it would be this.props.name
// const User = (props) =>{
//     return(
//         <div>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }

ReactDOM.render(React.createElement(RandomizerApp, null), app);
