import {getEnums, getClasses} from './parser';
import fixture from '../fixtures/type-descriptions.json';

describe('parser', () => {
  test('can getEnums', () => {
    const enums = getEnums(fixture);

    expect(enums).toBeTruthy();
    expect(enums[0].name).toBe(fixture.enums[0].name);
    expect(enums[0].description).toBe(fixture.enums[0].description);
    expect(enums[0].scope).toBe(fixture.enums[0].scope);

    expect(enums[0].values[0].name).toBe(fixture.enums[0].values[0].name);
    expect(enums[0].values[0].description).toBe(fixture.enums[0].values[0].description);
  });

  test('can getClasses', () => {
    const classes = getClasses(fixture);

    expect(classes).toBeTruthy();
    expect(classes[0].name).toBe(fixture.classes[0].name);
  });
});
