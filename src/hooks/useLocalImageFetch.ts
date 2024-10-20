import { useState, useEffect } from "react";

const useLocalImageFetch = (imageName: string, imagePath = "assets/images") => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const imageUrl = `${process.env.PUBLIC_URL}/${imagePath}/${imageName}`;

    const img = new Image();
    img.src = imageUrl;

    const handleLoad = () => {
      setImageSrc(imageUrl);
      setError(null);
      setIsLoading(false);
    };

    const handleError = () => {
      setImageSrc(undefined);
      setError("Image not found");
      setIsLoading(false);
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    setIsLoading(true);

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [imageName, imagePath]);

  return { imageSrc, error, isLoading };
};

export default useLocalImageFetch;
