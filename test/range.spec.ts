import Range from '../src/range';

describe('Range', () => {
  describe('of numbers', () => {
    const range = new Range<number>(7, 77);

    it('should contain a value', () => {
      expect(range.contains(17)).toBeTruthy();
    });

    it('should not contain a value', () => {
      expect(range.contains(177)).toBeFalsy();
    });

    it('should return an array of numbers', () => {
      expect(range.toArray()).toEqual([
        7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
        44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
        62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
      ]);
    });

    it('should return the sum of the range', () => {
      range.sum(); // lazy evaluation

      expect(range.sum()).toEqual(2982);
    });

    it('should return the string representation of the range', () => {
      expect(range.toString()).toEqual('7..77');
    });

    it('should return the count of the range', () => {
      expect(range.count()).toEqual(71);
    });
  });

  describe('of dates', () => {
    const returnDateSum = (start: Date, date: number) => new Date(start.getTime() + date);
    const startDate = new Date(2077, 7, 7)
    const endDate = returnDateSum(startDate, 7);
    const range = new Range<Date>(startDate, endDate);

    it('should contain a value', () => {
      expect(range.contains(returnDateSum(startDate, 3))).toBeTruthy();
    });

    it('should not contain a value', () => {
      expect(range.contains(new Date(2000, 7, 7))).toBeFalsy();
    });

    it('should return an array of dates', () => {
      range.toArray(); // lazy evaluation

      expect(range.toArray()).toEqual([
        startDate,
        returnDateSum(startDate, 1),
        returnDateSum(startDate, 2),
        returnDateSum(startDate, 3),
        returnDateSum(startDate, 4),
        returnDateSum(startDate, 5),
        returnDateSum(startDate, 6),
        returnDateSum(startDate, 7),
      ]);
    });

    it('should return the string representation of the range', () => {
      expect(range.toString()).toEqual('Sat Aug 07 2077 00:00:00 GMT+0000 (Coordinated Universal Time)..Sat Aug 07 2077 00:00:00 GMT+0000 (Coordinated Universal Time)');
    });

    it('should return the count of the range', () => {
      expect(range.count()).toEqual(8);
    });
  });

  describe('getting errors', () => {
    it('should throw an error when trying to sum a date range', () => {
      const range = new Range<Date>(new Date(2077, 7, 7), new Date(2077, 7, 8));
      expect(() => range.sum()).toThrowError('Start type is not supported');
    });

    it('should throw an error when trying init a range with a start greater than the end', () => {
      expect(() => new Range<number>(7, 1)).toThrowError('Start must be less than or equal to end');
    });

    it('should throw an error when trying init a range with a start type not supported', () => {
      expect(() => new Range<string>('a', 'b')).toThrowError('Start type is not supported');
    });
  });
});
