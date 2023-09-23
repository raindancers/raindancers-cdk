export function upperCaseKeys(obj: any): any {
  if (typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(upperCaseKeys);
  }
  if (obj === null) {
    return null;
  }
  const entries = Object.entries(obj);
  const mappedEntries = entries.map(
    ([k, v]) => [`${k.substr(0, 1).toUpperCase()}${k.substr(1)}`, upperCaseKeys(v)] as const,
  );
  return Object.fromEntries(mappedEntries);
}