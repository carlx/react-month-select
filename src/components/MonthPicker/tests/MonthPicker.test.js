import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import generateYears from '../utils/generate-years';
import generateMonths from '../utils/generate-months';
import MonthPicker from '../MonthPicker';
import MonthButton from '../MonthButton';
import MonthPickerDropDown from '../MonthPickerDropDown';
import MonthPickerDropDownContainer from '../MonthPickerDropDownContainer';

describe('Month picker test', () => {
  const locale = 'pl';
  configure({ adapter: new Adapter() });

  it('should generate years array', () => {
    const expected = [
      2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    ];

    expect(generateYears(2007, 2017)).toEqual(expected);
  });


  it('should generate months array', () => {
    const expected = 12;
    expect(generateMonths().length).toEqual(expected);
  });

  it('should render component', () => {
    const button = shallow(<MonthButton />);
    const wrapper = shallow(<MonthPicker locale={locale} button={button} />);
    expect(wrapper.find(MonthPickerDropDown)).toHaveLength(1);
    wrapper.setState({ open: true });
    expect(wrapper.find(MonthPickerDropDownContainer)).toHaveLength(1);
  });
});
