import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <table className="calculator">
        <tr>
          <td colspan="4">
            <div className="result">0</div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <Button label="clear" />
          </td>
          <td>
            <Button label="÷" />
          </td>
        </tr>
        <tr>
          <td>
            <Button label="7" />
          </td>
          <td>
            <Button label="8" />
          </td>
          <td>
            <Button label="9" />
          </td>
          <td>
            <Button label="×" />
          </td>
        </tr>
        <tr>
          <td>
            <Button label="4" />
          </td>
          <td>
            <Button label="5" />
          </td>
          <td>
            <Button label="6" />
          </td>
          <td>
            <Button label="-" />
          </td>
        </tr>
        <tr>
          <td>
            <Button label="1" />
          </td>
          <td>
            <Button label="2" />
          </td>
          <td>
            <Button label="3" />
          </td>
          <td>
            <Button label="+" />
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <Button label="0" />
          </td>
          <td colspan="2">
            <Button label="=" />
          </td>
        </tr>
      </table>
    );
  }
}

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

export default App;
