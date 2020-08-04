import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it.only('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
