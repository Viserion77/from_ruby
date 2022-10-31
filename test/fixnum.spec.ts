import fixnum from '../src/fixnum';

describe('fixnum', () => {
  describe('days', () => {
    it('should return the correct number of days', () => {
      const result = fixnum.day(1);
      expect(result).toEqual(new Date(86400000));
    });
  });
});
