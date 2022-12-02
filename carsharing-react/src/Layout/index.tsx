import React, { ReactNode } from 'react'
import * as ST from './styled'
import { Header } from '../components/Header'

interface ILayoutProps {
    children: ReactNode
}

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <ST.Wrapper>
            <Header />
            {children}
        </ST.Wrapper>
    )
}
