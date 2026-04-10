import { useEffect, useState } from "react"

export const useDebounce = (value: string, delay: number) => {
  const [debauncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debauncedValue;
}