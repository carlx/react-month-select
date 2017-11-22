import moment from 'moment';
const generateFirstDay = (year, monthIndex) => moment([year, monthIndex, 1]).format('YYYY-MM-DD');

export default generateFirstDay;
