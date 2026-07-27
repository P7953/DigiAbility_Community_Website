import Image, { ImageProps } from "next/image";
import React from "react";

interface AppImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  fallbackSrc?: string;
}

export function AppImage({ src, alt, className = "", ...props }: AppImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  );
}

export default AppImage;
