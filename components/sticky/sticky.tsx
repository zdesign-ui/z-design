/**
 * REFERENCE:
 * - https://annacoding.com/article/2fIvvTzulEFKPmU1CU018y/How-to-use-React-Hooks-to-create-sticky-header-or-React-components
 * - https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 */
import React, { useState, useEffect, useRef } from 'react'

interface StickyProps {
  child?: React.ReactChild,
  top: number
}

const Sticky: React.FunctionComponent<StickyProps> = (child, top) => {
  const [isSticky, setSticky] = useState<boolean>(false)
  const ref = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  const handleScroll = () => {
    console.log('---===>>', ref)
    //  setSticky(true)
    // if (ref && ref.current && ref.current.getBoundingClientRect()) {
    //   setSticky(ref.current.getBoundingClientRect().top <= top)
    // }
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