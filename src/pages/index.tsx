import * as React from "react"
import type {HeadFC, PageProps} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

import {ReactComponent as Brand} from '../images/azzurra__brand-main.svg'
import {ReactComponent as IcPdf} from '../images/azzurra__ic__pdf.svg'

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
                    <div className={`${styles.container__hero} py-14 px-4`}>
                        <div className="flex flex-col md:flex-row items-center lg:items-start mb-6 md:mb-16">
                            <div className="container__brand-wrapper flex-auto basis-1/4">
                                <div className="w-64 md:w-80 px-6">
                                    <Brand />
                                </div>
                            </div>

                            <div className="flex-auto basis-1/2">
                                <h1 className="text-xl sm:text-3x md:text-4xl lg:text-5xl pt-6 md:p-0 text-center md:text-left font-light uppercase text-azzurra-navy-blue">
                                    <span className="block">A Azzurra Capital dá </span>
                                    <span className="block">as boas-vindas a você.</span>
                                    <span className="block font-bold text-white">Nosso site está</span>
                                    <span className="block font-bold text-white">em construção.</span>
                                </h1>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center lg:items-start">
                            <div className="container__brand-wrapper flex-auto basis-3/6 mb-4 md:mb-0">
                                <h2 className="mb-2 md:mb-4 font-light text-white text-xl sm:text-2x md:text-2xl lg:text-4xl uppercase text-center md:text-left">
                                    <span className="block">Documentos</span>
                                    <span className="block font-bold">Regulatórios</span>
                                </h2>

                                <div className="max-w-boxPdf p-3 rounded flex flex-row items-center bg-azzurra-opaque-gold mb-6v md:mb-10">
                                    <div className="w-7">
                                        <IcPdf />
                                    </div>
                                    <p className="font-normal text-lg text-black leading-none uppercase ml-3">
                                        <span className="block">
                                            clique aqui para ver
                                        </span>
                                        <span className="block">
                                            os formulários
                                        </span>
                                    </p>
                                </div>

                                <div className="flex flex-row items-center gap-7">
                                    <StaticImage
                                        quality={100}
                                        width={120}
                                        height={91}
                                        src="../images/azzurra__ic__anbima--1.png"
                                        alt="Imagem"
                                    />

                                    <StaticImage
                                        quality={100}
                                        width={120}
                                        height={91}
                                        src="../images/azzurra__ic__anbima--2.png"
                                        alt="Imagem"
                                    />
                                </div>
                            </div>

                            <div className="container__brand-wrapper flex-auto basis-2/6">
                                <h3 className="font-light text-white text-xl sm:text-2x md:text-2xl lg:text-4xl uppercase text-center md:text-left">
                                    <span className="block">Fale com</span>
                                    <span className="block font-bold">
                                        <span className="font-light">a</span> AZurra Capital
                                    </span>
                                </h3>

                                <div>
                                    <p>
                                        ENTRE EM CONTATO:
                                    </p>
                                    <a href="tel:+551132631089" className="block">
                                        +55 (11) 3263-1089
                                    </a>
                                    <a href="tel:+5511944466662" className="block">
                                        +55 (11) 94446-6662
                                    </a>
                                </div>
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
