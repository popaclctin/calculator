import React, { Component } from 'react';
import './App.css';

const OPERATIONS = {
  ADD: (op1, op2) => op1 + op2,
  SUBTRACT: (op1, op2) => op1 - op2,
  MULTIPLY: (op1, op2) => op1 * op2,
  DIVIDE: (op1, op2) => op1 / op2,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      displayValue: 0,
      operator: null,
      inputValue: true,
    };
    this.onClickNumber = this.onClickNumber.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onClickOperation = this.onClickOperation.bind(this);
    this.onEquals = this.onEquals.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  onClickOperation(name) {
    const newOperator = OPERATIONS[name];
    this.setState(({ displayValue, operator, value }) => {
      const result = operator
        ? operator(value, displayValue)
        : displayValue;
      return {
        operator: newOperator,
        value: result,
        inputValue: true,
        displayValue: result,
      };
    });
  }

  onEquals() {
    this.setState(({ operator, value, displayValue }) => {
      const result = operator
        ? operator(value, displayValue)
        : displayValue;
      return {
        displayValue: result,
        operator: null,
        inputValue: true,
      };
    });
  }

  onClear() {
    this.setState({ displayValue: 0, operator: null });
  }

  onClickNumber(input) {
    this.setState(({ displayValue, inputValue }) => {
      return {
        displayValue: inputValue
          ? parseInt(input)
          : parseInt('' + displayValue + input),
        inputValue: false,
      };
    });
  }

  handleKeyDown(event) {
    const value = event.key;
    !isNaN(value) && this.onClickNumber(value);
    switch (value) {
      case '+':
        this.onClickOperation('ADD');
        break;
      case '-':
        this.onClickOperation('SUBTRACT');
        break;
      case '*':
        this.onClickOperation('MULTIPLY');
        break;
      case '/':
        this.onClickOperation('DIVIDE');
        break;
      case 'Enter':
        this.onEquals();
        break;
      case 'c':
        this.onClear();
        break;
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this.handleKeyDown,
      false,
    );
  }
  render() {
    const { displayValue } = this.state;
    return (
      <table className="calculator">
        <tbody>
          <tr>
            <td colSpan="4">
              <div className="result">{displayValue}</div>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <OperationButton label="clear" onClick={this.onClear} />
            </td>
            <td>
              <OperationButton
                label="÷"
                onClick={() => this.onClickOperation('DIVIDE')}
              />
            </td>
          </tr>
          <tr>
            <td>
              <NumberButton label="7" onClick={this.onClickNumber} />
            </td>
            <td>
              <NumberButton label="8" onClick={this.onClickNumber} />
            </td>
            <td>
              <NumberButton label="9" onClick={this.onClickNumber} />
            </td>
            <td>
              <OperationButton
                label="×"
                onClick={() => this.onClickOperation('MULTIPLY')}
              />
            </td>
          </tr>
          <tr>
            <td>
              <NumberButton label="4" onClick={this.onClickNumber} />
            </td>
            <td>
              <NumberButton label="5" onClick={this.onClickNumber} />
            </td>
            <td>
              <NumberButton label="6" onClick={this.onClickNumber} />
            </td>
            <td>
              <OperationButton
                label="-"
                onClick={() => this.onClickOperation('SUBTRACT')}
              />
            </td>
          </tr>
          <tr>
            <td>
              <NumberButton label="1" onClick={this.onClickNumber} />
            </td>
            <td>
              <NumberButton label="2" onClick={this.onClickNumber} />
            </td>
            <td>
              <NumberButton label="3" onClick={this.onClickNumber} />
            </td>
            <td>
              <OperationButton
                label="+"
                onClick={() => this.onClickOperation('ADD')}
              />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <NumberButton label="0" onClick={this.onClickNumber} />
            </td>
            <td colSpan="2">
              <OperationButton label="=" onClick={this.onEquals} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const OperationButton = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

const NumberButton = ({ label, onClick }) => (
  <button onClick={() => onClick(label)}>{label}</button>
);

export default App;
