import React, { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage Component
 * 
 * A high-performance image component that implements:
 * - Lazy loading (only loads when visible)
 * - Progressive image loading (blur-up technique)
 * - Modern image formats (AVIF, WebP) with fallbacks
 * - Responsive images (srcset)
 * - Intersection Observer API for optimal loading
 * 
 * @param {Object} props
 * @param {string} props.src - Primary image source (fallback)
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.className - CSS classes
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {boolean} props.lazy - Enable lazy loading (default: true)
 * @param {string} props.sizes - Responsive sizes attribute
 * @param {boolean} props.priority - Load immediately (for above-fold images)
 */
const OptimizedImage = ({
  src,
  alt = '',
  className = '',
  width,
  height,
  lazy = true,
  sizes = '100vw',
  priority = false,
  style = {},
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const imgRef = useRef(null);
  
  // Get image base name and path for optimized versions
  const getOptimizedSrc = (format) => {
    if (!src) return '';
    const pathParts = src.split('/');
    const filename = pathParts.pop();
    const [name, ext] = filename.split('.');
    const basePath = pathParts.join('/');
    
    if (format === 'avif' || format === 'webp') {
      return `${basePath}/optimized/${name}.${format}`;
    }
    return `${basePath}/optimized/${name}.${ext}`;
  };

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (!lazy || priority || !imgRef.current) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before visible
        threshold: 0.01,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [lazy, priority]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Generate responsive image sources for different screen sizes
  const generateSrcSet = (format) => {
    const baseName = src.split('/').pop().split('.')[0];
    const basePath = src.split('/').slice(0, -1).join('/');
    
    const sizes = {
      small: 400,
      medium: 800,
      large: 1200,
    };

    return Object.entries(sizes)
      .map(([size, width]) => `${basePath}/optimized/${baseName}-${size}.${format} ${width}w`)
      .join(', ');
  };

  return (
    <div
      ref={imgRef}
      className={`optimized-image-wrapper ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--muted)',
        ...style,
      }}
    >
      {isInView ? (
        <picture>
          {/* AVIF format for cutting-edge browsers (best compression) */}
          <source
            type="image/avif"
            srcSet={generateSrcSet('avif')}
            sizes={sizes}
          />
          
          {/* WebP format for modern browsers (excellent compression) */}
          <source
            type="image/webp"
            srcSet={generateSrcSet('webp')}
            sizes={sizes}
          />
          
          {/* Original format as fallback */}
          <img
            src={isInView ? getOptimizedSrc() || src : ''}
            alt={alt}
            width={width}
            height={height}
            loading={lazy && !priority ? 'lazy' : 'eager'}
            onLoad={handleLoad}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
            {...props}
          />
        </picture>
      ) : (
        // Placeholder while image is not in view
        <div
          style={{
            width: width || '100%',
            height: height || 'auto',
            aspectRatio: width && height ? `${width}/${height}` : 'auto',
            backgroundColor: 'var(--muted)',
          }}
          aria-label="Loading image"
        />
      )}
      
      {/* Loading blur effect */}
      {!isLoaded && isInView && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--muted)',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;

/**
 * Usage Example:
 * 
 * import OptimizedImage from './components/OptimizedImage';
 * 
 * // For hero images (above-fold, load immediately)
 * <OptimizedImage
 *   src="/images/media/hero.jpg"
 *   alt="Profile picture"
 *   width={350}
 *   height={350}
 *   priority={true}
 *   className="rounded-circle"
 * />
 * 
 * // For project images (below-fold, lazy load)
 * <OptimizedImage
 *   src="/images/media/project1.png"
 *   alt="Project screenshot"
 *   lazy={true}
 *   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 * />
 */
