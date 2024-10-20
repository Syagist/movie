import {
  StyledImage,
  StyledImageError,
  StyledImagePlaceholder,
} from "./StyledImage";

interface ImageProps {
  imageSrc?: string;
  alt: string;
  isLoading?: boolean;
  error?: string | null;
}

const Image: React.FC<ImageProps> = ({ imageSrc, alt, error, isLoading }) => {
  return (
    <>
      {isLoading && (
        <StyledImagePlaceholder>
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </StyledImagePlaceholder>
      )}

      {error ? (
        <StyledImageError>Error loading image: {error}</StyledImageError>
      ) : (
        imageSrc && <StyledImage src={imageSrc} alt={alt} />
      )}
    </>
  );
};

export default Image;
