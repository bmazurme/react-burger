export default function filterObject(obj) {
  const newObj = {};

  for (const key in obj) {
    if (key !== 'onClickIngredient') {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}
