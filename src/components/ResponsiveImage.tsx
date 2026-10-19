import type { ImageSource } from "@/assets/images";

interface ResponsiveImageProps {
  image: ImageSource;
  alt: string;
  className?: string;
  /** Sizes hint for the browser; defaults to full viewport width. */
  sizes?: string;
  /** Set to "eager" + fetchPriority high for above-the-fold LCP imagery. */
  priority?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean;
}

const ResponsiveImage = ({
  image,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  width,
  height,
  style,
  "aria-hidden": ariaHidden,
}: ResponsiveImageProps) => (
  <picture>
    <source type="image/avif" srcSet={image.avifSrcSet} sizes={sizes} />
    <source type="image/webp" srcSet={image.webpSrcSet} sizes={sizes} />
    <img
      src={image.src}
      alt={alt}
      aria-hidden={ariaHidden}
      width={width}
      height={height}
      style={style}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      // React 18 only passes the lowercase attribute through to the DOM.
      {...{ fetchpriority: priority ? "high" : "auto" }}
    />
  </picture>
);

export default ResponsiveImage;
