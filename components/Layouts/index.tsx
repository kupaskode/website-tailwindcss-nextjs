import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

interface LayoutsProps {
  children: ReactNode;
}
export default function Layouts(props: LayoutsProps) {
  const { children } = props;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="google"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Website Portfolio Tailwindcss</title>
      </Head>
      <div>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
