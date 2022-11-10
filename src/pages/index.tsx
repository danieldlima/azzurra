import * as React from "react"
import type {HeadFC, PageProps} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

import AzzurraBrand from "../components/Icons/AzzurraBrand";
import PdfFile from "../components/Icons/PdfFile";
import Mail from "../components/Icons/Mail";

// @ts-ignore
import * as styles from '../styles/home.module.css';
import ContentPage from "../components/ContentPage";
import ButtonLink from "../components/Buttons/ButtonLink";


const IndexPage: React.FC<PageProps> = () => {
    return (
        <ContentPage>
            <div className="flex flex-col md:flex-row items-center lg:items-start">
                <div className="container__brand-wrapper flex-auto basis-3/6 mb-10 md:mb-0 w-5/6 md:w-4/6">
                    <div className="flex flex-col gap-5">
                        <h2 className="border-b pb-4 md:border-0 md:pb-0 font-light text-white text-xl sm:text-2x md:text-2xl lg:text-4xl text-center md:text-left">
                            <span className="block">Documentos</span>
                            <span className="block font-bold">Regulatórios</span>
                        </h2>

                        <a href="/images/azzurra__hero-bg.jpg" download className="max-w-boxPdf mx-auto md:mx-0 p-3 rounded flex flex-row items-center bg-azzurra-opaque-gold hover:bg-azzurra-gold ease-in-out duration-200 cursor-pointer mb-6v md:mb-6">
                            <div className="w-7 text-white">
                                <PdfFile />
                            </div>
                            <p className="font-normal text-sm md:text-lg text-black leading-none ml-3">
                                                <span className="block leading-none">
                                                    clique aqui para ver
                                                </span>
                                <span className="block leading-none">
                                                    os formulários
                                                </span>
                            </p>
                        </a>

                        <div className="flex flex-row items-center mx-auto md:mx-0 gap-7">
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
                </div>

                <div className="container__brand-wrapper flex-auto v text-center md:text-left w-5/6 md:w-4/6 md:w-auto">
                    <div className="flex flex-col gap-5">
                        <h3 className="border-b pb-4 md:border-0 md:pb-0 font-light text-white text-xl sm:text-2x md:text-2xl lg:text-4xl text-center md:text-left">
                            <span className="block">Fale com</span>
                            <span className="block font-bold">
                                                <span className="font-light">a</span> AZurra Capital
                                            </span>
                        </h3>

                        <div className="text-white">
                            <p className="font-bold text-xl">
                                ENTRE EM CONTATO:
                            </p>
                            <a href="tel:+551132631089" className="block text-lg font-light">
                                +55 (11) 3263-1089
                            </a>
                            <a href="tel:+5511944466662" className="block text-lg font-light">
                                +55 (11) 94446-6662
                            </a>
                        </div>

                        <div className="text-white normal-case">
                            <p className="font-bold text-xl">
                                FAÇA UMA VISITA:
                            </p>
                            <p>
                                                <span className="block">
                                                    R. Leopoldo Couto Magalhães Júnior, 110
                                                </span>
                                <span className="block">
                                                    Conj. 81 - Jardim Paulista
                                                </span>
                                <span className="block">
                                                    São Paulo – SP
                                                </span>
                                <span className="block">
                                                    CEP 04542-000
                                                </span>
                            </p>
                        </div>

                        <ButtonLink href="mailto:contato@azzurra.com.br" icon={<Mail />} title="Envie sua mensagem" />
                    </div>
                </div>
            </div>
        </ContentPage>
    )
}

export default IndexPage

export const Head: HeadFC = () => {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            {/* @ts-ignore */}
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
                rel="stylesheet" />

            <title>Home Page</title>
        </>
    );
}
