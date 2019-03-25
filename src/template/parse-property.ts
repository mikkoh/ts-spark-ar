
export default function parseProperty(description: string): string {
  const regexGetterSetter = /\((get|set)\)\s*([\w\d]+)\s*:\s*([\w\d]+)/g;
  const results: string[] = [];
  let match;

  while(match = regexGetterSetter.exec(description)) {
    const [,accessorType,accessorName,accessorResultType] = match;

    if (accessorType === 'get') {
      results.push(
        `${accessorType} ${accessorName}(): ${accessorResultType};`
      );
    } else {
      results.push(
        `${accessorType} ${accessorName}(value: ${accessorResultType});`
      );
    }
  }

  return results.join('\n');
}
