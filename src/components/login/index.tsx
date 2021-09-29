// eslint-disable-next-line no-use-before-define
import React from 'react';
import type { NextPage } from 'next'
import styles from 'components/login/styles.module.css'
import Button from 'ui_components/button';
import Input from 'ui_components/input';

// eslint-disable-next-line import/prefer-default-export
export const Login: NextPage = () => (
    <div className={styles.login_form_box}>

        <div>
            Hello, type your e-mail and password to procede.
        </div>
        <Input placeholder={"email"} />
        <Input placeholder={"password"} type={"password"} />

        <Button>Click me</Button>

    </div>
)
