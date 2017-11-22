import * as moment from 'moment/moment';

const generateYears = (startYear = moment().year() - 10, EndYear = moment().year()) => {
  const years = [];
  let start = startYear;
  while (start <= EndYear) {
    years.push(start);
    start += 1;
  }
  return years;
};

export default generateYears;
