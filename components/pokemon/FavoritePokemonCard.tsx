import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

export const FavoritePokemonCard: FC<{ id: number }> = ({ id }) => {
  const router = useRouter();

  const onFavoriteClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} xl={1} key={id}>
      <Card hoverable clickable css={{ padding: 10 }} onClick={onFavoriteClick}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          height="100%"
          width={140}
        />
      </Card>
    </Grid>
  );
};
