import moment from 'moment';
import upperFirst from './upper-first';

const generateMonths = (language = 'en', format = 'MMM') => {
  moment.locale(language);
  const months = [];
  for (let i = 0; i < 12; i += 1) {
    months.push({
      name: upperFirst(moment().month(i).format(format)),
      fullName: upperFirst(moment().month(i).format('MMMM')),
      index: i,
      number: i + 1,
      numberPadded: moment().month(i).format('MM'),
    });
  }
  return months;
};

export default generateMonths;
