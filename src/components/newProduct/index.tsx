// eslint-disable-next-line no-use-before-define
import React from 'react';
import type { NextPage } from 'next'
import styles from 'components/newProduct/styles.module.css'
import DesktopNav from 'ui_components/desktopNav';
import Input from 'ui_components/input';
import { Form } from 'ui_components/form';

// eslint-disable-next-line import/prefer-default-export
export const NewProduct: NextPage = () => (
    <>
        <div className={styles.new_product_main_container}>
            <Form>
                <Input placeholder={"name"} />
                <Input placeholder={"price in NANO"} />
                <Input placeholder={"Description"} />
                <Input placeholder={"image"} />
            </Form>
        </div>
    </>
)
