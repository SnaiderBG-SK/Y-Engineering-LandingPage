import Head from "next/head";
import { Link } from "next-view-transitions";
import Script from "next/script";
import React from "react";

/**
 * MainLayoutProps
 */
interface MainLayoutProps {
    children?: React.ReactNode;
    locale?: string;
}
/**
 * Functional component for MainLayout
 * @param param0
 * @returns
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    // i18n messages
    return (
        <html lang={'en'}>
            <Head>
                <Link rel="preconnect" href="https://fonts.googleapis.com" />
                <Link rel="preconnect" href="https://fonts.gstatic.com" />
                <Link 
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" 
                    rel="stylesheet"
                />
            </Head>
            <body>
                {children}
                {/* Fontawesome CDN */}
                <Script
                    src="https://kit.fontawesome.com/f3e6ce4ab8.js"
                    crossOrigin="anonymous"
                />
            </body>
        </html>
    );
};

export default MainLayout;
