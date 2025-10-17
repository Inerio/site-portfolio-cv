import { useEffect, useState } from 'react';
import s from './styles/LazyImage.module.css';

/**
 * @param {string} src
 * @param {string} alt
 * @param {string} className  
 * @param {string} aspectRatio
 */
export default function LazyImage({ src, alt, className = '', aspectRatio = '1 / 1' }) {
    const [loaded, setLoaded] = useState(false);
    const [errored, setErrored] = useState(false);

    useEffect(() => {
        setLoaded(false);
        setErrored(false);
    }, [src]);

    return (
        <div
            className={`${s.wrapper} ${!loaded && !errored ? s.isLoading : ''} ${errored ? s.isError : ''}`}
            style={{ aspectRatio }}
            aria-busy={!loaded && !errored}
        >
            {!errored ? (
                <img
                    className={`${s.img} ${className}`}
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setLoaded(true)}
                    onError={() => setErrored(true)}
                />
            ) : (
                <div className={s.fallback} role="img" aria-label={`${alt} (unavailable)`} />
            )}

            {!loaded && !errored && <div className={s.skeleton} aria-hidden="true" />}
        </div>
    );
}
