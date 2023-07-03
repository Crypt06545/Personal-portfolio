import React from 'react';
import { useTranslation } from 'react-i18next';
// components
import SectionTitle from '../Titles/sectionTitle';
// utils
import { getAge } from '../../utils/dates';
// images
import DownloadIcon from '../../img/download.svg'
// css
import './about.css';


const About = () => {
    const { t } = useTranslation('global');

    return (
        <div id="about">
            <SectionTitle title={t("about-me.title")} />
            <div className="about-description-container">
                <p className="first-letter">
                    {
                        t("about-me.description-a") + ' '
                        + getAge('2020/07/20') + ' '
                        + t("about-me.description-b") + ' '
                        + getAge('2003/02/21') + ' '
                        + t("about-me.description-c")
                    }
                </p>
                <p>{t("about-me.description-d")}</p>

                <a className="download-cv" href="/CV.pdf" download>
                    <div>{t("about-me.cv")}</div>
                    <img src={DownloadIcon} alt="Mehadi's CV curriculum" />
                </a>
            </div>
        </div>
    );
}

export default About;