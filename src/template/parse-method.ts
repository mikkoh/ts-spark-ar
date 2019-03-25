export default function parseMethod(description: string): string {
  const regexMethod = /([\w\d]+)\([\w\d:\s,]+\):\s*([\w\d]+)/g;
  const methods:string[] = [];
  let match;

  while(match = regexMethod.exec(description)) {
    const [method] = match;
    methods.push(method);
  }

  return `${methods.join(',\n')},\n`;
}
