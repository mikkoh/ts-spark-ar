import parseProperty from './parse-property';
import {
  removeExtraWhiteSpace as rmWS,
} from '../../test/helpers';

describe('template/parseProperty', () => {
  const fixtureGetAndSet = '```\n(get) url: StringValue\n(set) url: StringSignal\n```\n\nSpecifies the URL of the texture to be downloaded.';

  test('can parse out a property', () => {
    const result = parseProperty(fixtureGetAndSet);

    expect(rmWS(result)).toMatch(rmWS(`
      get url(): StringValue;
      set url(value: StringSignal);
    `));
  });
});
