// eslint-disable-next-line no-use-before-define
import React, { ReactNode } from "react"
import cn from "classnames"
import styles from 'ui_components/card/styles.module.scss'

const Card = ({ image, name, price }: { image: string, name: string, price: string }) =>
(
    <>
        <div className={styles.card_box}>
            <img className={styles.card_box_image} src={image} alt={name} />
            <p className={styles.card_main_text}>{name}</p>
            <p className={styles.card_secondary_text}>{price}</p>
        </div>
    </>
)

export default Card;