// eslint-disable-next-line no-use-before-define
import React from 'react';
import styles from 'components/products/styles.module.scss'
import Card from 'ui_components/card';
import { logo, searchIcon } from 'utils/ImagesPath'

// eslint-disable-next-line import/prefer-default-export
export const Products: React.FC = () => (
    <>
        <div className={styles.search_box}>
            <input placeholder={"what are you looking for"} />
            <img src={searchIcon} alt={"search Icon"} />
        </div>
        <div className={styles.product_grid}>
            <Card image={logo} name={"product"} price={"10.52 N"} />
            <Card image={logo} name={"product"} price={"10.52 N"} />
            <Card image={logo} name={"product"} price={"10.52 N"} />
            <Card image={logo} name={"product"} price={"10.52 N"} />
        </div>
        <div className={styles.product_grid}>
            <Card image={logo} name={"product"} price={"10.52 N"} />
            <Card image={logo} name={"product"} price={"10.52 N"} />
            <Card image={logo} name={"product"} price={"10.52 N"} />
            <Card image={logo} name={"product"} price={"10.52 N"} />
        </div>
    </>
)
