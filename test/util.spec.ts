import {setBackgroundCompatibility} from '../src';

describe('setBackgroundCompatibility', () => {
  it('should set the days method on the Number prototype', () => {
    setBackgroundCompatibility();

    // @ts-ignore
    expect(Number.prototype.days).toBeDefined();
  });
});
