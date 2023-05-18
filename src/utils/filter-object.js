/* eslint-disable no-restricted-syntax */
export function filterObject(obj) {
  const newObj = {};

  for (const key in obj) {
    if (key !== 'onClick') {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}
