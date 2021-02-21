import { ReactChild, ReactChildren } from "react";

interface LayoutProps {
  children: ReactChild | ReactChildren
}

/** 
 * If need to pass flat arrays of elements use below expression:
 * children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
 */

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      {{ children }}
    </div>
  )
}
