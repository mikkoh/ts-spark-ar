import {getEnums} from './parser';
import data from '../fixtures/type-descriptions.json';

describe('parser', () => {
  test('can getEnums', () => {
    const enums = getEnums(data);

    expect(enums).toBeTruthy();
    expect(enums[0].name).toBe(data.enums[0].name);
    expect(enums[0].description).toBe(data.enums[0].description);
    expect(enums[0].scope).toBe(data.enums[0].scope);

    expect(enums[0].values[0].name).toBe(data.enums[0].values[0].name);
    expect(enums[0].values[0].description).toBe(data.enums[0].values[0].description);
  });
});
