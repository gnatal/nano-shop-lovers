// eslint-disable-next-line no-use-before-define
import React, { ReactNode } from "react"
import cn from "classnames"
import styles from 'ui_components/button/styles.module.css'

const Button = ({ children, ...props }: { children: ReactNode }) =>
(
    <button {...props} className={cn(styles.button_primary)} >{children}</button>
)

export default Button;