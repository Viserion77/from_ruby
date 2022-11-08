import array from '../src/array';

describe('array', () => {
  describe('isEmpty', () => {
    it('should return true for an empty array', () => {
      const result = array.isEmpty([]);
      expect(result).toEqual(true);
    });

    it('should return false for a non-empty array', () => {
      const result = array.isEmpty([1]);
      expect(result).toEqual(false);
    });
  });

  describe('setBackgroundCompatibility', () => {
    it('should add isEmpty to the Array prototype', () => {
      array.setBackgroundCompatibility();

      expect([].isEmpty()).toEqual(true);
    });
  });
});
