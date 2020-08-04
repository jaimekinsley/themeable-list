import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AppProvider from '../../providers/AppProvider';

describe('App component', () => {
  it.only('renders App', () => {
    const wrapper = shallow(<AppProvider><App /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
