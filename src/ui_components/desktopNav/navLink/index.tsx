// eslint-disable-next-line no-use-before-define
import React, { ReactNode } from "react"
import styles from 'ui_components/desktopNav/styles.module.css'
import Link from 'next/link'

const NavLink = ({ link, linkName }: { link: string, linkName: string }) =>
(
    <>
        <Link href={link}>
            <div className={styles.link}>
                <a className={styles.link_text}>{linkName}</a>
            </div>
        </Link>
    </>
)

export default NavLink;