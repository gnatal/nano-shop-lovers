// eslint-disable-next-line no-use-before-define
import React, { ReactNode } from 'react';
import styles from 'components/404/styles.module.css'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa";
import { logo } from "utils/ImagesPath"
import Image from 'next/image'
// eslint-disable-next-line import/prefer-default-export
export const PageNotFound = () => (
    <>
        <div className={styles.page_not_found_box}>
            <h1 className={styles.page_not_found_text}>Page not found </h1>
        </div>
        <div className={styles.nano_icon_box}>
            <Link href="/">
                <a><FaArrowLeft size={28} color={"#222"} /> </a>
            </Link>
            <Image src={logo} layout={"responsive"} width={"250"} height={"110"} />
        </div>
    </>
)
