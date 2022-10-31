import time from '../src/time';

describe('time', () => {
  describe('beginningOfDay', () => {
    it('should return the beginning of the day', () => {
      const result = time.beginningOfDay(new Date(2019, 0, 1, 12, 0, 0));
      expect(result).toEqual(new Date(2019, 0, 1, 0, 0, 0));
    });
  });

  describe('yesterday', () => {
    it('should return yesterday', () => {
      const result = time.yesterday();
      const expected = new Date();
      expected.setDate(expected.getDate() - 1);
      expect(result).toEqual(expected);
    });
  });
});
