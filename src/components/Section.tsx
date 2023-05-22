import { ReactNode } from "react"

export const Section = ({ children } : {children: ReactNode}) => {
  return (
    <section className="px-6 lg:px-24 sm:px-9">
        {children}
    </section>
  )
}