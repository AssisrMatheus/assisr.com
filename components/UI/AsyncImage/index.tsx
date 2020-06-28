/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';

type AsyncImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & { className?: string; alt: string; loader?: React.ReactElement };

const AsyncImage: React.FC<AsyncImageProps> = ({ loader, src, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [instance, setInstance] = useState<HTMLImageElement | undefined>();

  useEffect(() => {
    if (!loaded && !instance) {
      const image = new Image();

      image.src = src || '';
      image.onload = () => setLoaded(true);

      setInstance(image);
    }
  }, [src, loaded, instance]);

  if (loaded && instance) {
    return <img src={src} {...props} />;
  }
  if (loader) {
    return loader;
  }

  return null;
};

export default AsyncImage;
