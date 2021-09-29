// eslint-disable-next-line no-use-before-define
import React from 'react';
import type { NextPage } from 'next'
import styles from 'components/home/styles.module.css'
import { servicesImage, productsImage } from 'utils/ImagesPath';
import Link from 'next/link'

// eslint-disable-next-line import/prefer-default-export
export const Home: NextPage = () => (
    <>
        <div className={styles.home_header_box}>
            <h1 className={styles.home_header_title}>What do you need today ?</h1>
        </div>
        <div className={styles.home_presentation_box}>
            <Link href={"/services"}>
                <div className={styles.home_card_box}>
                    <img className={styles.home_card_image} src={servicesImage} alt="services card" />
                    <p className={styles.home_card_text}>Services</p>
                </div>
            </Link>
            <Link href={"/products"}>
                <div className={styles.home_card_box}>
                    <img className={styles.home_card_image} src={productsImage} alt="products card" />
                    <p className={styles.home_card_text}>Products</p>
                </div>
            </Link>
        </div>
    </>
)
