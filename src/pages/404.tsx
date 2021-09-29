// eslint-disable-next-line no-use-before-define
import React from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'

const Component: NextPage = (props) => (
    <div>
        Page not found
        <Link href="/">
            <a>Back to home</a>
        </Link>
    </div>
)

export default Component;