import fixnum from '../src/fixnum';

describe('fixnum', () => {
  describe('days', () => {
    it('should return the correct number of days', () => {
      const result = fixnum.days(1);
      expect(result).toEqual(new Date(86400000));
    });
  });

  describe('setBackgroundCompatibility', () => {
    it('should add days to the Number prototype', () => {
      fixnum.setBackgroundCompatibility();

      expect((1).day()).toEqual(new Date(86400000));
    });
  });
});
