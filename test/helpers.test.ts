import {
  removeExtraWhiteSpace,
} from './helpers';

describe('test/helpers', () => {
  test('removeExtraWhiteSpace', () => {
    const result = removeExtraWhiteSpace('  hello {\n    something   \n} ');
    expect(result).toBe(' hello { something } ');
  });
});
