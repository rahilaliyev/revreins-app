import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage(
  key: string,
  initialValue: unknown,
): [unknown, (value: unknown) => void, () => void] {
  // Use a function for initial state to avoid localStorage access on every render
  const [value, setValue] = useState(() => {
    try {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      const storedValue = globalThis.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  });

  // useEffect to update localStorage when the state changes
  useEffect(() => {
    try {
      if (typeof window === 'undefined') {
        return;
      }
      globalThis.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(error);
    }
  }, [key, value]);

  // Optional: Function to remove the item from localStorage
  const remove = useCallback(() => {
    try {
      if (typeof window === 'undefined') {
        return;
      }
      globalThis.localStorage.removeItem(key);
      setValue(initialValue); // Reset state to initial value
    } catch (error) {
      console.warn(error);
    }
  }, [key, initialValue]);

  // Return the state value, the setter function, and the remove function
  return [value, setValue, remove];
}

export default useLocalStorage;
