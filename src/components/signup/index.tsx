// eslint-disable-next-line no-use-before-define
import React from 'react';
import styles from 'components/signup/styles.module.css'
import Button from 'ui_components/button';
import Input from 'ui_components/input';
import { Form as FormBox } from 'ui_components/form';
import { useForm, SubmitHandler } from "react-hook-form";
// eslint-disable-next-line import/prefer-default-export

interface ISignUpForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ISignUpForm>();
    const onSubmit: SubmitHandler<ISignUpForm> = data => {
        console.log("calling submit")
        console.log(data)
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormBox >
                    <Input placeholder={"nano address"} {...register('name', { required: true })} />
                    {errors.name && <span className={styles.error}>This field is required</span>}
                    <Input
                        placeholder={"email"}
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className={styles.error}>This field is required</span>}
                    <Input placeholder={"password"} type={"password"} {...register('password', { required: true })} />
                    {errors.password && <span className={styles.error}>This field is required</span>}
                    <Input placeholder={"confirm password"} type={"password"} {...register('confirmPassword', { required: true })} />
                    {errors.confirmPassword && <span className={styles.error}>This field is required</span>}
                    <div className={styles.signup_button_box}>
                        <Button>Sign up</Button>
                    </div>
                </FormBox>
            </form>
        </>
    )
}
