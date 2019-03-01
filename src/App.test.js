import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should add correctly', () => {
  const component = renderer.create(<App />);
  component.getInstance().onClickNumber('7');
  component.getInstance().onClickOperation('ADD');
  component.getInstance().onClickNumber('4');
  component.getInstance().onEquals();
  expect(component.toJSON()).toMatchSnapshot();
});

it('should subtract correctly', () => {
  const component = renderer.create(<App />);
  component.getInstance().onClickNumber('7');
  component.getInstance().onClickOperation('SUBTRACT');
  component.getInstance().onClickNumber('4');
  component.getInstance().onEquals();
  expect(component.toJSON()).toMatchSnapshot();
});

it('should divide correctly', () => {
  const component = renderer.create(<App />);
  component.getInstance().onClickNumber('12');
  component.getInstance().onClickOperation('DIVIDE');
  component.getInstance().onClickNumber('4');
  component.getInstance().onEquals();
  expect(component.toJSON()).toMatchSnapshot();
});

it('should multiply correctly', () => {
  const component = renderer.create(<App />);
  component.getInstance().onClickNumber('7');
  component.getInstance().onClickOperation('MULTIPLY');
  component.getInstance().onClickNumber('4');
  component.getInstance().onEquals();
  expect(component.toJSON()).toMatchSnapshot();
});
