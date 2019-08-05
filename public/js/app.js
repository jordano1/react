'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Decident = function (_React$Component) {
    _inherits(Decident, _React$Component);

    function Decident(props) {
        _classCallCheck(this, Decident);

        var _this = _possibleConstructorReturn(this, (Decident.__proto__ || Object.getPrototypeOf(Decident)).call(this, props));

        _this.deleteOptions = _this.deleteOptions.bind(_this);
        _this.deleteOption = _this.deleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.state = {
            //default state
            options: []
        };
        return _this;
    }

    _createClass(Decident, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                //getting localstorage array
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                console.log('catch error: ', e);
                //do nothing for now
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            //setting localstorage array with component array

            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);

                console.log('saving data');
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // not really used
            console.log('unmount');
        }
    }, {
        key: 'deleteOptions',
        value: function deleteOptions() {
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
        key: 'addOption',
        value: function addOption(option) {
            //if option value is empty
            if (!option) {
                return 'enter valid value';
                //if what you are submitting is the same value as something within the array
            } else if (this.state.options.indexOf(option) > -1) {
                var lastOption = this.state.options.length - 1;
                return 'the item: "' + this.state.options[lastOption] + '", you have submitted is a duplicate';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
        //delete options
        //implicitely return an object({})

        //add options

    }, {
        key: 'handlePick',
        value: function handlePick() {
            var rand = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[rand];
            return console.log(option);
        }
        //render components

    }, {
        key: 'render',
        value: function render() {
            var title = 'decidn\'t';
            var subtitle = 'put your mind into the hands of the beep boops';
            return React.createElement(
                'div',
                { id: 'app' },
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, {
                    options: this.state.options,
                    deleteOptions: this.deleteOptions,
                    deleteOption: this.deleteOption

                }),
                React.createElement(AddOption, {
                    addOption: this.addOption,
                    hasOptions: this.state.options.length > 0
                })
            );
        }
    }]);

    return Decident;
}(React.Component);
// Decident.defaultProps = {
//     options: []
// }

//can setup default props in components
// Header.defaultProps = {
//     title: 'some default!'
// }


var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlePick, disabled: !props.hasOptions },
            'randomize'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.deleteOptions },
            'remove all'
        ),
        //add option message when no options are added
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started'
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
        { 'class': 'option' },
        React.createElement(
            'p',
            null,
            'option: ',
            props.optionText,
            React.createElement(
                'button',
                {
                    onClick: function onClick() {
                        props.deleteOption(props.optionText);
                    } },
                'delete option'
            )
        )
    );
};

// setup form with text input and submit button
// wireup onsubmit
// addOption->fetch value typed -> if value, then alert

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    //we setup the constructor props to pass down this.props.addOption
    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.formSubmit = _this2.formSubmit.bind(_this2);
        _this2.state = {
            //undefined by default, there will be no error is what this means
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'formSubmit',
        value: function formSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.addOption(option);

            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                // clear input field of values if data is submitted
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                //rendering the error
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.formSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// const User = (props) => {
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

var app = document.getElementById('app');
ReactDOM.render(React.createElement(Decident, null), app);
