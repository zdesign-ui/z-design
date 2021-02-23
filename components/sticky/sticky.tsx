/**
 * REFERENCE:
 * https://annacoding.com/article/2fIvvTzulEFKPmU1CU018y/How-to-use-React-Hooks-to-create-sticky-header-or-React-components
 */
import React, { useState, useEffect, useRef, ReactChild } from 'react'

interface StickyProps {
  child: ReactChild,
  top: number
}

const Sticky: React.FunctionComponent<StickyProps> = (child, top) => {
  const [isSticky, setSticky] = useState<boolean>(false)
  const ref = useRef('sticky')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (ref && ref.current && ref.current.getBoundingClientRect()) {
      setSticky(ref.current.getBoundingClientRect().top <= top)
    }
  }

  return (
    <div className={`stick__wrapper ${isSticky && 'sticky'}`} ref={ref}>
      <div className="stick--inner">
        {child}
      </div>
    </div>
  )
}

export default Sticky