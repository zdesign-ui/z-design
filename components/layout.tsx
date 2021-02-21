/**
 * Reference:
 * - https://fettblog.eu/typescript-react/children/
 * - https://stackoverflow.com/questions/53688899/typescript-and-react-children-type
 * - https://medium.com/quick-code/nextjs-with-typescript-integration-and-example-dd2e13da668b
 */

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout
