/* eslint-env mocha, jest */

import React from 'react';
import { shallow } from 'enzyme';

import DueDate from '../DueDate';

it('should render', () => {
  shallow(<DueDate />);
});
it('should be a <span />', () => {
  const dueDate = shallow(<DueDate />);
  expect(dueDate.is('span.DueDate')).toEqual(true);
});
it('should show icon if due date is tomorrow', () => {
  const dueDate = shallow(<DueDate due="tomorrow" />);
  expect(dueDate.find('small').length).toBeGreaterThan(0);
});
it('should show icon if due date is today', () => {
  const dueDate = shallow(<DueDate due="today" />);
  expect(dueDate.find('small').length).toBeGreaterThan(0);
});
