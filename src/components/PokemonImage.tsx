import whosThatPokemon from '../assets/whosthatpokemon.png';
import { useEffect, useState } from 'react';
import { Loading } from './Loading';

interface PokemonImgProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

export const PokemonImage = (props: PokemonImgProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const { src, alt, style } = props;

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      setIsLoading(false);
      img.src = whosThatPokemon;
    };
  }, [src]);

  return isLoading ? (
    <Loading />
  ) : (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.currentTarget.src = whosThatPokemon;
      }}
      style={style}
    />
  );
};
