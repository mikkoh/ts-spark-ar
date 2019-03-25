import parseMethod from './parse-method';
import {
  removeExtraWhiteSpace as rmWS,
} from '../../test/helpers';

describe('template/parseMethod', () => {
  const fixture = '```\n  watch(tag: String, signal:BoolSignal): void\n  watch(tag: String, signal:ScalarSignal): void\n  watch(tag: String, signal:StringSignal): void\n  ```\n\n  Adds the specified signal to the watch view in AR Studio with the specified tag.';

  test('can parse out a property', () => {
    const result = parseMethod(fixture);

    expect(rmWS(result)).toMatch(rmWS(`
      watch(tag: String, signal:BoolSignal): void,
      watch(tag: String, signal:ScalarSignal): void,
      watch(tag: String, signal:StringSignal): void,
    `));
  });
});
