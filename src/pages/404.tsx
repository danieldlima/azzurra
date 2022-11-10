import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import ContentPage from "../components/ContentPage";

import ArrowLeft from "../components/Icons/ArrowLeft";
import ButtonLink from "../components/Buttons/ButtonLink";

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <ContentPage isDescription={false}>
            <h1 className="mb-10 text-xl sm:text-2x md:text-3xl lg:text-4xl text-center md:text-left font-light text-azzurra-navy-blue">
                <span className="block">Desculpe, não conseguimos encontrar</span>
                <span className="block text-white font-bold">o que você estava procurando.</span>
            </h1>

            <ButtonLink href="/" icon={<ArrowLeft />} title="Volta a página inicial" align="justify-between" width="w-fit" />
        </ContentPage>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found 23</title>
