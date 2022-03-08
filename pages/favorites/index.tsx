import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { Grid, Card } from '@nextui-org/react';

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
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favorites.map((id) => (
            <Grid xs={6} sm={3} xl={1} key={id}>
              <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  height="100%"
                  width={140}
                />
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavoritesPage;
