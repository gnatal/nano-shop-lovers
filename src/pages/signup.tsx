// eslint-disable-next-line no-use-before-define
import React from 'react';
import type { NextPage } from 'next'
import { SignUp as Page } from 'components/signup';

const Component: NextPage = (props) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <>
        <head>
            <title>Nano lovers shop - signup</title>
        </head>
        <Page {...props} />
    </>
)

export default Component;