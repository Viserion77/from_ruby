import {setFullBackgroundCompatibility} from '../src/util';

describe('setFullBackgroundCompatibility', () => {
  it('should set the days method on the Number prototype', () => {
    setFullBackgroundCompatibility();

    expect(Number.prototype.isNull).toBeDefined();
  });
});
