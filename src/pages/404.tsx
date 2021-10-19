// eslint-disable-next-line no-use-before-define
import React from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import { PageNotFound as Page } from 'components/404';

const Component: NextPage = (props) => (
    <Page {...props} />
)

export default Component;