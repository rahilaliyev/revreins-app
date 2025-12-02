import { useCallback } from 'react';
import { type NavigateOptions, useSearchParams } from 'react-router-dom';

type TSearchParamsObject = Record<string, string>;
type TSearchParamsUpdater = TSearchParamsObject | ((prev: TSearchParamsObject) => TSearchParamsObject);

interface ISetSearchParamsOptions {
  replace?: boolean;
  navigateOptions?: NavigateOptions;
}

type TUseCustomSearchParams = [
  TSearchParamsObject,
  (updates: TSearchParamsUpdater, options?: ISetSearchParamsOptions) => void,
];

export function useCustomSearchParams(): TUseCustomSearchParams {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries(searchParams.entries());

  const setParams = useCallback(
    (updates: TSearchParamsUpdater, options: ISetSearchParamsOptions = {}) => {
      setSearchParams((prev) => {
        const current = Object.fromEntries(prev.entries());

        const newParams = typeof updates === 'function' ? updates(current) : updates;

        if (options.replace) {
          return new URLSearchParams(newParams);
        } else {
          const merged = { ...current, ...newParams };

          Object.keys(merged).forEach((key) => {
            if (merged[key] === null || merged[key] === undefined || merged[key] === '') {
              delete merged[key];
            }
          });

          return new URLSearchParams(merged);
        }
      }, options.navigateOptions);
    },
    [setSearchParams],
  );

  return [params, setParams];
}
