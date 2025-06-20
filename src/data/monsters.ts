
import { Monster } from '@/types/monster';

export const monsters: Monster[] = [
  {
    id: 'forest-deer',
    name: 'Forest Guardian',
    types: ['Nature', 'Earth'],
    power: 75,
    health: 90,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop',
    color: 'green'
  },
  {
    id: 'shadow-cat',
    name: 'Shadow Pouncer',
    types: ['Dark', 'Agility'],
    power: 85,
    health: 70,
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop',
    color: 'gray'
  },
  {
    id: 'ice-penguin',
    name: 'Frost Walker',
    types: ['Ice', 'Water'],
    power: 65,
    health: 85,
    image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=400&h=400&fit=crop',
    color: 'blue'
  },
  {
    id: 'earth-stag',
    name: 'Mountain Spirit',
    types: ['Earth', 'Nature'],
    power: 95,
    health: 100,
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=400&fit=crop',
    color: 'amber'
  },
  {
    id: 'jungle-monkey',
    name: 'Jungle Trickster',
    types: ['Nature', 'Agility'],
    power: 70,
    health: 75,
    image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=400&fit=crop',
    color: 'orange'
  }
];
