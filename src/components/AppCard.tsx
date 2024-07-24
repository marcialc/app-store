import { useState } from "react";
import LazyLoadImage from "./LazyLoadImage";
import CheckMarkIcon from "@/assets/CheckMarkIcon";

type AppProps = {
  name: string;
  tagline: string;
  image_url: string;
};

const IMAGE_SIZE = 50;

const AppCard = ({ name, tagline, image_url }: AppProps) => {
  const [appDownloaded, setAppDownloaded] = useState(false);

  const handleGetApp = () => {
    setAppDownloaded(true);
  };

  return (
    <div className="flex items-center justify-between card-side w-full max-w-96 max-h-fit sm:max-h-24 p-4 rounded-xl shadow-lg text-xs hover:shadow-2xl">
      <LazyLoadImage
        src={image_url}
        alt={name}
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
      />
      <div className="flex flex-col flex-1 gap-2 px-2">
        <h2 className="text-base font-bold">{name}</h2>
        <p>{tagline}</p>
      </div>
      <div className="card-actions justify-end items-center">
        {appDownloaded ? (
          <CheckMarkIcon size={28} />
        ) : (
          <button
            className="btn btn-primary btn-sm rounded-lg"
            onClick={handleGetApp}
          >
            GET
          </button>
        )}
      </div>
    </div>
  );
};

export default AppCard;
