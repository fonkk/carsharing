import React, { ReactNode } from 'react'

interface ILayoutProps {
    children: ReactNode
}

export const Layout = ({ children }: ILayoutProps) => {
    return <>{children}</>
}
