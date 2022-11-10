import * as React from "react";

import {StaticImage} from "gatsby-plugin-image";

// @ts-ignore
import * as styles from "../../styles/home.module.css";
import AzzurraBrand from "../Icons/AzzurraBrand";

interface ContentPageProps {
    children?: React.ReactElement | React.ReactElement[];
    isDescription?: boolean;
}

export const ContentPage = ({ children, isDescription = true }: ContentPageProps) => {
    return (
        <div
            className={`${styles.container} bg-azzurra-dark-blue after:pointer-events-none after:user after:bg-gradient-linear after:w-full after:h-full after:absolute after:left-0 after:top-0 md:after:bg-none`}>
            <StaticImage
                quality={100}
                width={1920}
                height={1080}
                className={`${styles.backgroundImage} w-full h-full`}
                src="../images/azzurra__hero-bg.jpg" alt="Imagem"
            />

            <main className="relative z-10">
                <div className="container max-w-6xl mx-auto">
                    <div className={`${styles.container__hero} py-14 px-4 uppercase`}>
                        <div className="flex flex-col md:flex-row items-center lg:items-start mb-6 md:mb-16">
                            <div className="container__brand-wrapper flex-auto basis-1/4">
                                <div className="w-64 md:w-80 pr-6">
                                    <AzzurraBrand />
                                </div>
                            </div>

                            {isDescription && (
                                <div className="flex-auto basis-1/2">
                                    <h1 className="text-xl sm:text-3x md:text-4xl lg:text-5xl pt-6 md:p-0 text-center md:text-left font-light text-azzurra-navy-blue">
                                        <span className="block">A Azzurra Capital dá </span>
                                        <span className="block">as boas-vindas a você.</span>
                                        <span className="block font-bold text-white">Nosso site está</span>
                                        <span className="block font-bold text-white">em construção.</span>
                                    </h1>
                                </div>
                            )}
                        </div>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ContentPage;
