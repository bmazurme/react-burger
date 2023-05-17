const componentDictionary = [
  { name: 'calories', label: 'Калории,ккал' },
  { name: 'proteins', label: 'Белки,г' },
  { name: 'fat', label: 'Жиры,г' },
  { name: 'carbohydrates', label: 'Углеводы,г' },
];

export function getComponents(current) {
  return componentDictionary
    .map(({ label, name }, i) => ({
      id: `ingredients-${current[name]}-${i}`,
      name: label,
      value: current ? current[name] : '-',
    }));
}
