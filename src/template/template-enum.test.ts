import templateEnum from './template-enum';
import enumDefinition from '../type-spark-ar-json/enum-definition';
import {
  removeExtraWhiteSpace as rmWhiteSpace,
} from '../../test/helpers';

describe('templateEnum', () => {
  const fixture: enumDefinition = {
    name: 'AnEnum',
    scope: 'Scope',
    description: 'I am a description',
    values: [
      {
        name: 'Value1',
        description: 'I am Value1',
      },
      {
        name: 'Value2',
        description: 'I am Value2',
      }
    ],
  };

  test('can template', () => {
    const result = templateEnum(fixture);
    const expectedResult = `
      enum AnEnum {
        Value1,
        Value2
      }

      export default AnEnum;
    `;

    expect(rmWhiteSpace(result)).toBe(rmWhiteSpace(expectedResult));
  });
});
