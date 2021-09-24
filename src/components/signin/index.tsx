// eslint-disable-next-line no-use-before-define
import React from 'react';
import type { NextPage } from 'next'
import styles from 'styles/Home.module.css'
import Button from 'ui_components/button';
import Input from 'ui_components/input';

// eslint-disable-next-line import/prefer-default-export
export const SignIn: NextPage = () => (
    <div className={styles.container}>
        first pag
        email: <Input placeholder={"email"} />
        password: <Input placeholder={"password"} type={"password"} />

        <Button>Click me</Button>

    </div>
)
