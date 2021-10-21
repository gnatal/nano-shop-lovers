export interface ISignUpForm{
    email: string;
    password:string;
    confirmPassword: string;
    address: string;
}

export interface ISignUpState{
    formState: ISignUpForm
}