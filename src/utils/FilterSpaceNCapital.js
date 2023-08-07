export function GetFilterSpaceNLowerCase(getWords) {
  if (getWords) {
    const afterFilter = getWords.toLowerCase().replace(/\s/g, "-");
    return afterFilter;
  }
}
