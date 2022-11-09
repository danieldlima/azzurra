import * as React from "react"
import type {HeadFC, PageProps} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

import {ReactComponent as Brand} from '../images/azzurra__brand-main.svg'

import * as styles from '../styles/home.module.css';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div className={`${styles.container} bg-azzurra-dark-blue after:pointer-events-none after:user after:bg-gradient-linear after:w-full after:h-full after:absolute after:left-0 after:top-0 md:after:bg-none`}>
            <StaticImage
                quality={100}
                width={1920}
                height={1080}
                className={`${styles.backgroundImage}`}
                src="../images/azzurra__hero-bg.jpg" alt="Imagem"
            />

            <main className="relative z-10">
                <div className="container max-w-6xl mx-auto">
                    <div className={`${styles.container__hero} py-20 px-4`}>
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="container__brand-wrapper flex-auto basis-1/4">
                                <div className="w-64 md:w-72 p-6 bg-gradient-light bg-cover bg-bottom bg-brandHighlights bg-no-repeat">
                                    <Brand />
                                </div>
                            </div>

                            <div className="flex-auto basis-1/2">
                                <h1 className="text-xl sm:text-3x md:text-4xl lg:text-5xl pt-6 md:p-0 text-center md:text-left font-light uppercase text-white md:text-azzurra-navy-blue">
                                    <span className="block">A Azzurra Capital dá </span>
                                    <span className="block">as boas-vindas a você.</span>
                                    <span className="block font-bold text-white">Nosso site está</span>
                                    <span className="block font-bold text-white">em construção.</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default IndexPage

export const Head: HeadFC = () => {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
                rel="stylesheet"/>

            <title>Home Page</title>
        </>
    );
}
