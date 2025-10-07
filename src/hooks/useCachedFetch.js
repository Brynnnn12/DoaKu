import { useState, useEffect, useRef } from "react";

const cache = new Map();

export function useCachedFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    if (cache.has(url)) {
      setData(cache.get(url));
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(url, { signal: abortControllerRef.current.signal })
      .then((response) => response.json())
      .then((result) => {
        cache.set(url, result);
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          return;
        }
        setError(err);
        setLoading(false);
      });

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [url]);

  const invalidateCache = () => {
    cache.delete(url);
    // Trigger re-fetch by updating state or re-running effect
    setData(null);
    setLoading(true);
    setError(null);
  };

  return { data, loading, error, invalidateCache };
}

export function invalidateCache(url) {
  cache.delete(url);
}

export function clearCache() {
  cache.clear();
}
