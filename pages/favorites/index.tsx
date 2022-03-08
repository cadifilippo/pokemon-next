import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { FavoritesPokemons } from '../../components/pokemon';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons favorites={favorites} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
