// eslint-disable-next-line no-use-before-define
import React, { ReactNode } from "react"
import cn from "classnames"
import styles from 'ui_components/desktopNav/styles.module.css'
import NavLink from "ui_components/desktopNav/navLink"

const DesktopNav = ({ ...props }: {}) =>
(
    <>
        <div className={styles.desktop_nav_container}>
            <NavLink link={"/profile"} linkName={"Profile"} />
            <NavLink link={"/orders"} linkName={"Orders"} />
            <NavLink link={"/sales"} linkName={"Sales"} />
            <NavLink link={"/newProduct"} linkName={"New product"} />
            <NavLink link={"/wallet"} linkName={"Wallet"} />
            <NavLink link={"/configuration"} linkName={"Configuration"} />

        </div>
    </>
)

export default DesktopNav;