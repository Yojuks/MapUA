export const mainFilters = [
  {
    id: 1,
    forLoggedUser: false,
    type: 'Cost',
    values: ['free', 'low cost', 'high cost']
  },
  {
    id: 2,
    forLoggedUser: false,
    type: 'Seasonal',
    values: ['winter', 'summer', 'spring', 'autumn', 'full year', 'seasonal']
  },
  {
    id: 3,
    forLoggedUser: true,
    type: 'Personal',
    values: ['visited', 'favorites', 'personal']
  }
];

export const getFiltersForUser = () =>
  mainFilters.reduce(
    (prev, current) =>
      current.forLoggedUser ? prev : [...prev, ...current.values],
    [] as string[]
  );
