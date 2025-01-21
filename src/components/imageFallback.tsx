import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageFallbackProps {
  src: string | StaticImageData;
  alt: string;
  fallbackSrc: string | StaticImageData;
  width?: number | `${number}`;
  height?: number | `${number}`;
  className?: string;
}

const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  width,
  height,
  className,
}) => {
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(src);

  const handleError = () => {
    setImageSrc(fallbackSrc); 
  };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError} 
    />
  );
};

export default ImageFallback;
