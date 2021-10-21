// eslint-disable-next-line no-use-before-define
import React from 'react';
import styles from 'components/signup/styles.module.css'
import Button from 'ui_components/button';
import Input from 'ui_components/input';
import { Form as FormBox } from 'ui_components/form';
import { useForm, SubmitHandler } from "react-hook-form";
import { ISignUpForm } from 'components/signup/types';
// eslint-disable-next-line import/prefer-default-export


export const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ISignUpForm>();
    const onSubmit: SubmitHandler<ISignUpForm> = data => {
        console.log(data)
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormBox >
                    <input placeholder={"nano address"} {...register('address', { required: true })} />
                    {errors.address && <span className={styles.error}>This field is required</span>}
                    <input
                        placeholder={"email"}
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className={styles.error}>This field is required</span>}
                    <input placeholder={"password"} type={"password"} {...register('password', { required: true })} />
                    {errors.password && <span className={styles.error}>This field is required</span>}
                    <input placeholder={"confirm password"} type={"password"} {...register('confirmPassword', { required: true })} />
                    {errors.confirmPassword && <span className={styles.error}>This field is required</span>}
                    <div className={styles.signup_button_box}>
                        <Button>Sign up</Button>
                    </div>
                </FormBox>
            </form>
        </>
    )
}
