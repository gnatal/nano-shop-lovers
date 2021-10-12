import { ReactNode } from "react";
import Header from 'ui_components/header'
import styles from 'components/layout/styles.module.css'
import { Footer } from "ui_components/footer/footer";
import DesktopNav from "ui_components/desktopNav";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <DesktopNav />
            <main className={styles.main_body}>{children}</main>
            <Footer />
        </>
    )
}