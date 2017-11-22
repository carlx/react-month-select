import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import MonthPickerContainer from './MonthPickerContainer';
import MonthPickerNav from './MonthPickerNav';
import MonthPickerNavItem from './MonthPickerNavItem';
import MonthPickerMonthItem from './MonthPickerMonthItem';
import MonthPickerBodyContainer from './MonthPickerBodyContainer';
import MonthPickerDropDown from './MonthPickerDropDown';
import MonthPickerDropDownContainer from './MonthPickerDropDownContainer';
import WatchDocumentEvents from './WatchDocumentEvents';
import NavButton from './NavButton';
import generateMonths from './utils/generate-months';
import generateYears from './utils/generate-years';

class MonthPicker extends React.Component {
  constructor(props) {
    super(props);
    const years = generateYears();
    const months = generateMonths(this.props.locale);
    this.state = {
      months,
      years,
      activeIndex: years.length - 1,
      open: false,
      selected: { month: months[0], year: years[years.length - 1] },
    };
  }

  monthSelect = (month, year) => () => {
    this.setState({ selected: { month, year } });
    if (this.props.handleMonthSelect) {
      this.prop.handleMonthSelect(month, year);
    }
    this.toggle();
  };

  next = () => {
    if (this.state.activeIndex < this.state.years.length - 1) {
      this.setState({ activeIndex: this.state.activeIndex + 1 });
    }
  };

  prev = () => {
    if (this.state.activeIndex >= 1) {
      this.setState({ activeIndex: this.state.activeIndex - 1 });
    }
  };

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <MonthPickerDropDown>
        {cloneElement(this.props.button, {
          onClick: this.toggle,
          title: `${this.state.selected.month.fullName} ${this.state.selected.year}`,
        })}
        {this.state.open &&
          <MonthPickerDropDownContainer>
            <WatchDocumentEvents onClickOutside={this.toggle} onEscapeKey={this.toggle}>
              <MonthPickerContainer onKeyUp={this.toggle}>
                <MonthPickerNav>
                  <MonthPickerNavItem order={1} grow={0} onClick={this.prev} role="button" button>
                    <NavButton prev />
                  </MonthPickerNavItem>
                  <MonthPickerNavItem order={2} grow={3}>
                    {this.state.years[this.state.activeIndex]}
                  </MonthPickerNavItem>
                  <MonthPickerNavItem order={3} grow={0} onClick={this.next} role="button" button>
                    <NavButton />
                  </MonthPickerNavItem>
                </MonthPickerNav>
                <MonthPickerBodyContainer>
                  {
                    this.state.months.map(
                      (month) =>
                        <MonthPickerMonthItem
                          key={month.number}
                          basis="50px"
                          onClick={this.monthSelect(month, this.state.years[this.state.activeIndex])}
                          title={month.fullName}
                        >
                          {month.name}
                        </MonthPickerMonthItem>
                    )
                  }
                </MonthPickerBodyContainer>
              </MonthPickerContainer>
            </WatchDocumentEvents>
          </MonthPickerDropDownContainer>
        }
      </MonthPickerDropDown>
    );
  }
}

MonthPicker.propTypes = {
  locale: PropTypes.string.isRequired,
  handleMonthSelect: PropTypes.func,
  button: PropTypes.node.isRequired,
};

export default MonthPicker;
