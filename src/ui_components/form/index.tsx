import React, { ReactNode } from 'react';
import styles from 'ui_components/form/styles.module.scss'

export const Form = ({ children }: { children: ReactNode }) => (
    <div className={styles.form_box}>
        {children}
    </div>
)
