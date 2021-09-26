// eslint-disable-next-line no-use-before-define
import React, { ReactNode } from "react"
import cn from "classnames"
import styles from 'ui_components/header/styles.module.css'
import Image from 'next/image'
import { logo } from "utils/ImagesPath"

const Header = ({ ...props }) => {
    const tittle = "Nano shop lovers";

    return (
        <div className={cn([styles.header_box])}>
            <span className={cn([styles.header_name])}>{tittle}</span>
            <div className={cn([styles.nano_image_box])}>
                <div className={cn([styles.nano_image])}>
                    <Image src={logo} layout={"responsive"} width={"2500"} height={"1100"} />
                </div>
            </div>
        </div>
    )

}

export default Header;