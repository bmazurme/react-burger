interface GenericObject {
  [key: string]: string | number,
}

export function filterObject(obj: unknown) {
  const newObj: GenericObject = {};

  Object.keys(obj as GenericObject).forEach((key) => {
    if (key !== 'onClick') {
      newObj[key] = (obj as GenericObject)[key];
    }
  });

  return newObj;
}
