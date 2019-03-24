import enumDefinition from '../type-spark-ar-json/enum-definition';

export default function templateEnum(enumValue: enumDefinition): string {
  const valuesString = enumValue.values
    .map(({name}) => `  ${name}`)
    .join(',\n');

  return `
enum ${enumValue.name} {
${valuesString}
}

export default ${enumValue.name};
`;
}
