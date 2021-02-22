/**
 * Reference:
 * - https://fettblog.eu/typescript-react/children/
 * - https://stackoverflow.com/questions/53688899/typescript-and-react-children-type
 * - https://medium.com/quick-code/nextjs-with-typescript-integration-and-example-dd2e13da668b
 */

import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
interface LayoutProps {
  children: ReactNode,
  hasHeader?: boolean,
  hasFooter?: boolean
}

const Layout = ({ children, hasHeader=true, hasFooter=true }: LayoutProps) => {
  console.log(hasHeader, hasFooter)
  const header = () => hasHeader ? <Header /> : ''
  // console.log(header)

  const footer = () => hasFooter ? <Footer /> : ''
  // console.log(footer)
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
