import parseProperty from './parse-property';
import {
  removeExtraWhiteSpace as rmWS,
} from '../../test/helpers';

describe('template/parseProperty', () => {
  const fixtureGetAndSet = '```\n(get) url: StringValue\n(set) url: StringSignal\n```\n\nSpecifies the URL of the texture to be downloaded.';
  const fixtureOnlyGet = '```\n(get) state: StringSignal\n(set) (Not Available)\n```\n\nSpecifies a `StringSignal` representing the loading state of the external texture. The value of the signal is guaranteed to be a member of the `TexturesModule.ExternalTexture.State` enumeration.';

  test('can parse out a property', () => {
    const result = parseProperty(fixtureGetAndSet);

    expect(rmWS(result)).toMatch(rmWS(`
      get url(): StringValue;
      set url(value: StringSignal);
    `));
  });

  test('can parse out property with only get', () => {
    const result = parseProperty(fixtureOnlyGet);

    expect(rmWS(result)).toMatch(rmWS(`
      get state(): StringSignal;
    `));
  });
});
