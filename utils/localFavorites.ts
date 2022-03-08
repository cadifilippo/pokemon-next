import { type } from 'os';
import { json } from 'stream/consumers';

const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((item) => item !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existsFavorite = (id: number) => {
  if (typeof window === 'undefined') return false;

  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default { pokemons, toggleFavorite, existsFavorite };
