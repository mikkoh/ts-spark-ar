type methodDefinition = {
    name: string,
    description?: string,
};

type propertyDefintion = {
  name: string,
  description: string,
};

type classDefinition = {
  name: string,
  scope?: string,
  description: string,
  super?: string,
  exampleCode?: string,
  methods: methodDefinition[],
  properties: propertyDefintion[],
};

export default classDefinition;
