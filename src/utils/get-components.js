const componentDictionary = [
  { name: 'calories', label: 'Калории,ккал' },
  { name: 'proteins', label: 'Белки,г' },
  { name: 'fat', label: 'Жиры,г' },
  { name: 'carbohydrates', label: 'Углеводы,г' },
];

export default function getComponents(current) {
  return componentDictionary
    .map(({ label, name }, i) => ({
      id: `ingredient-${current[name]}-${i}`,
      name: label, value: current ? current[name] : '-',
    }));
}
