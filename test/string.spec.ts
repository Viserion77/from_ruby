import string from '../src/string';

describe('string', () => {
  describe('isEmpty', () => {
    it('should return true for an empty string', () => {
      const result = string.isEmpty('');
      expect(result).toEqual(true);
    });

    it('should return false for a non-empty string', () => {
      const result = string.isEmpty('a');
      expect(result).toEqual(false);
    });
  });

  describe('setBackgroundCompatibility', () => {
    it('should add isEmpty to the String prototype', () => {
      string.setBackgroundCompatibility();

      expect(''.isEmpty()).toEqual(true);
    });
  });
});
