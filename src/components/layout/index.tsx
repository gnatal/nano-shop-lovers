import { ReactNode } from "react";
import Header from 'ui_components/header'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}