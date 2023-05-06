export default function filterObject(obj) {
  const newObj = {};

  for (const key in obj) {
    if (key !== 'onClick') {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}