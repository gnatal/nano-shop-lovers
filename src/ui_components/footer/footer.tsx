import React from 'react';
import Link from 'next/link'
import styles from 'ui_components/footer/styles.module.css'
import { footer_logo } from 'utils/ImagesPath';

export const Footer = () => (
    <div className={styles.footer_box}>
        <div className={styles.links_box}>
            <div className={styles.footer_links_style}>
                <Link href="/about">
                    <a>about us</a>
                </Link>
            </div>
            <div className={styles.footer_links_style}>
                <Link href="/faq">
                    <a>faq</a>
                </Link>
            </div>
            <div className={styles.footer_links_style}>
                <Link href="/contact">
                    <a>contact</a>
                </Link>
            </div>
            <div className={styles.footer_links_style}>
                <Link href="/blog">
                    <a>blog</a>
                </Link>
            </div>
        </div>
        <div className={styles.footer_logo_box}>
            <img className={styles.footer_logo_style} src={footer_logo} alt="Nano black logo" />
        </div>

    </div>
);