import generateYears from '../utils/generate-years';
import generateMonths from '../utils/generate-months';

describe('Month picker test', () => {
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
});
