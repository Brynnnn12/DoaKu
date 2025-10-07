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
          // Request was cancelled, don't set error
          return;
        }
        setError(err);
        setLoading(false);
      });

    // Cleanup: abort request on unmount or URL change
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [url]);

  return { data, loading, error };
}

// Function to invalidate cache for a specific URL
export function invalidateCache(url) {
  cache.delete(url);
}

// Function to clear all cache
export function clearCache() {
  cache.clear();
}
