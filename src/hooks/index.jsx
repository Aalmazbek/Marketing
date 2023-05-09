import { useEffect } from "react"
import { useLayoutEffect } from "react"
import { useRef } from "react"

export const useLatest = (value) => {
  const valueRef = useRef(value)

  useLayoutEffect(() => {
    valueRef.current = value
  }, [value])

  return valueRef
}



export const useOutsideClick = (elementRef, handler, attached) => {
  const latestHandler = useLatest(handler)


  useEffect(() => {
    if (!attached) return;

    
    const handleClick = (e) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(e.target)) {
        latestHandler.current();
      }
    }

    setTimeout(() => document.addEventListener('click', handleClick), 0)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [elementRef, handler, attached])
}
