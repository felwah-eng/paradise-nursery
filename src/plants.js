const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;

// Six unique products per category (18 total).
export const plantCategories = [
  {
    name: 'Air Purifying',
    description: 'Natural refreshers that make any room feel lighter.',
    plants: [
      { id: 'snake', name: 'Snake Plant', price: 18, image: photo('photo-1593691509543-c55fb32e5cee') },
      { id: 'peace', name: 'Peace Lily', price: 24, image: photo('photo-1501004318641-b39e6451bec6') },
      { id: 'spider', name: 'Spider Plant', price: 15, image: photo('photo-1485955900006-10f4d324d411') },
      { id: 'aloe', name: 'Aloe Vera', price: 16, image: photo('photo-1509423350716-97f9360b4e09') },
      { id: 'rubber', name: 'Rubber Plant', price: 29, image: photo('photo-1545241047-6083a3684587') },
      { id: 'pothos', name: 'Golden Pothos', price: 19, image: photo('photo-1497250681960-ef046c08a56e') },
    ],
  },
  {
    name: 'Low Maintenance',
    description: 'Easy-going greenery for busy lives.',
    plants: [
      { id: 'zz', name: 'ZZ Plant', price: 27, image: photo('photo-1459156212016-c812468e2115') },
      { id: 'jade', name: 'Jade Plant', price: 14, image: photo('photo-1509423350716-97f9360b4e09') },
      { id: 'cactus', name: 'Golden Barrel Cactus', price: 17, image: photo('photo-1459411552884-841db9b3cc2a') },
      { id: 'echeveria', name: 'Echeveria', price: 13, image: photo('photo-1463320726281-696a485928c7') },
      { id: 'dracaena', name: 'Dracaena', price: 26, image: photo('photo-1525498128493-380d1990a112') },
      { id: 'haworthia', name: 'Haworthia', price: 12, image: photo('photo-1416879595882-3373a0480b5b') },
    ],
  },
  {
    name: 'Tropical Favorites',
    description: 'Bold leaves and resort-at-home energy.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 35, image: photo('photo-1501004318641-b39e6451bec6') },
      { id: 'fiddle', name: 'Fiddle Leaf Fig', price: 39, image: photo('photo-1508022713622-df2d8fb7b4cd') },
      { id: 'bird', name: 'Bird of Paradise', price: 42, image: photo('photo-1545241047-6083a3684587') },
      { id: 'calathea', name: 'Calathea', price: 28, image: photo('photo-1485955900006-10f4d324d411') },
      { id: 'philodendron', name: 'Philodendron', price: 31, image: photo('photo-1497250681960-ef046c08a56e') },
      { id: 'areca', name: 'Areca Palm', price: 33, image: photo('photo-1441974231531-c6227db76b6e') },
    ],
  },
];
