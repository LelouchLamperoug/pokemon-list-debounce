import { useCallback } from 'react';

const debounce = (cb, timer) => {
  let deb;
  return (...args) => {
    clearInterval(deb);
    deb = setTimeout(() => {
      cb(args);
    }, timer);
  };
};

const useDebounce = (callback, timer) => {
  const debounceSetValue = useCallback(
    () => debounce((value) => callback(value), timer),
    []
  );
  const handleDebounce = debounceSetValue();
  return [handleDebounce];
};

export default useDebounce;
