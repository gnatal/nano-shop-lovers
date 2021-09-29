// eslint-disable-next-line no-use-before-define
import React from 'react';
import styles from 'components/signup/styles.module.css'
import Button from 'ui_components/button';
import Input from 'ui_components/input';
import { Form } from 'ui_components/form';

// eslint-disable-next-line import/prefer-default-export
export const SignUp = () => (
    <>
        <Form>
            nano address: <Input placeholder={"nano address"} />
            email: <Input placeholder={"email"} />
            password: <Input placeholder={"password"} type={"password"} />
            confirm password: <Input placeholder={"confirm password"} type={"password"} />

        </Form>
        <div className={styles.signup_button_box}>
            <Button>Sign up</Button>
        </div>

    </>
)
