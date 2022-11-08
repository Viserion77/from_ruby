import object from '../src/object';

describe('object', () => {
  describe('isEmpty', () => {
    it('should return true for an empty object', () => {
      const result = object.isEmpty({});
      expect(result).toEqual(true);
    });

    it('should return false for a non-empty object', () => {
      const result = object.isEmpty({a: 1});
      expect(result).toEqual(false);
    });
  });

  describe('setBackgroundCompatibility', () => {
    it('should add isEmpty to the Object prototype', () => {
      object.setBackgroundCompatibility();

      expect({}.isEmpty()).toEqual(true);
    });
  });
});
