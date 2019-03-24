function removeExtraWhiteSpace(value: string): string {
  return value
    .replace(/\n/g, ' ')
    .replace(/(\s)+/g, (_match, whiteSpace) => {
      return whiteSpace;
    });
}

export {
  removeExtraWhiteSpace,
};
