import { SyntheticEvent, useState } from "react";
import Modal from "./Modal";
import LazyLoadImage from "./LazyLoadImage";
import CheckMarkIcon from "@/assets/CheckMarkIcon";

type CardModalProps = {
  title: string;
  description: string;
  version: string;
  category: string;
  imageUrl: string;
  isOpen: boolean;
  onAppDownload: () => void;
  onClose?: () => void;
};

const IMAGE_SIZE = 250;

const CardModal = ({
  title,
  description,
  version,
  category,
  imageUrl,
  isOpen = false,
  onClose,
  onAppDownload,
}: CardModalProps) => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadApp = () => {
    setIsDownloaded(true);
    onAppDownload();
    onClose && onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center">
        <LazyLoadImage
          src={imageUrl}
          alt={title}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex flex-row gap-2">
          <span className="text-sm text-gray-800">Category: {category}</span>
          <span className="text-sm text-gray-800">Version: {version}</span>
        </div>
        <p className="py-4">{description}</p>
        {isDownloaded ? (
          <CheckMarkIcon size={30} />
        ) : (
          <button
            className="btn btn-primary btn-sm rounded-lg"
            onClick={handleDownloadApp}
          >
            Download App
          </button>
        )}
      </div>
    </Modal>
  );
};

export default CardModal;
