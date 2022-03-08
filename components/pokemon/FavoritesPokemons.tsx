import { Grid, Card } from '@nextui-org/react';
import { FC } from 'react';
import { FavoritePokemonCard } from './';

interface Props {
  favorites: number[];
}

export const FavoritesPokemons: FC<Props> = ({ favorites }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favorites.map((id) => (
        <FavoritePokemonCard key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
