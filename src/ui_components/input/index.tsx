// eslint-disable-next-line no-use-before-define
import React, { ReactNode } from "react"
import cn from "classnames"
import styles from 'ui_components/input/styles.module.css'

const Input = ({ ...props }) =>
(
    <input {...props} className={styles.input_primary} />
)

export default Input;