const componentDictionary = [
  { name: 'calories', label: 'Калории,ккал' },
  { name: 'proteins', label: 'Белки,г' },
  { name: 'fat', label: 'Жиры,г' },
  { name: 'carbohydrates', label: 'Углеводы,г' },
];

export default function getComponents(current) {
  return componentDictionary
    .map(({ label, name }) => ({ name: label, value: current ? current[name] : '-' }));
}
