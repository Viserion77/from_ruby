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

  describe('setBackgroundCompatibility', () => {
    it('should add beginningOfDay to the Date prototype', () => {
      time.setBackgroundCompatibility();

      expect(new Date(2019, 0, 1, 12, 0, 0).beginningOfDay()).toEqual(
        new Date(2019, 0, 1, 0, 0, 0)
      );
    });

    it('should add yesterday to the Date prototype', () => {
      time.setBackgroundCompatibility();

      expect(Date.yesterday().getDate()).toEqual(new Date().getDate() - 1);
    });
  });
});
