// eslint-disable-next-line no-use-before-define
import React, { ReactNode } from "react"
import cn from "classnames"
import styles from 'ui_components/header/styles.module.css'
import Image from 'next/image'
import { logo } from "utils/ImagesPath"
import Link from 'next/link'

const Header = ({ ...props }) => {
    const tittle = "Nano shop lovers";

    return (
        <div className={cn([styles.header_box])}>
            <span className={cn([styles.header_name])}>{tittle}</span>
            <div className={styles.header_tabs_box}>
                <div className={cn([styles.nano_image_box])}>
                    <div className={styles.nano_image}>
                        <Link href="/">
                            <Image src={logo} layout={"responsive"} width={"2500"} height={"1100"} />
                        </Link>
                    </div>
                </div>
                <div className={styles.header_links_box}>
                    <div className={styles.header_link}>
                        <Link href="/signup" >
                            <a>sign up</a>
                        </Link>
                    </div>
                    <div className={styles.header_link}>
                        <Link href="/login">
                            <a>sign in</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header;