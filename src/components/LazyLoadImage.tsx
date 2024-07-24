import { useCallback, useState } from "react";
import Image from "next/image";
import LoadingSpinner from "./LoadingSpinner";

type LazyLoadImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const LazyLoadImage = ({ src, alt, width, height }: LazyLoadImageProps) => {
  const [loading, setLoading] = useState(false);

  const handleImageLoad = useCallback(() => {
    setLoading(false);
  }, [loading]);

  return (
    <figure className="relative">
      {loading ? (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <LoadingSpinner size="lg" />
        </div>
      ) : null}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        className={`rounded-lg ${loading ? "visible" : "visible"}`}
      />
    </figure>
  );
};

export default LazyLoadImage;
