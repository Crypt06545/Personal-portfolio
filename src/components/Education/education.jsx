import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../Titles/sectionTitle';
import './style.css';

const Education = () => {
    const { t } = useTranslation('global');

    const educationData = [
        {
            id: 1,
            institution: t("education.college.name"),
            degree: t("education.college.degree"),
            year: t("education.college.year"),
            description: t("education.college.description"),
            icon: '🎓'
        },
        {
            id: 2,
            institution: t("education.hss.name"),
            degree: t("education.hss.degree"),
            year: t("education.hss.year"),
            description: t("education.hss.description"),
            icon: '🏛️'
        },
        {
            id: 3,
            institution: t("education.school.name"),
            degree: t("education.school.degree"),
            year: t("education.school.year"),
            description: t("education.school.description"),
            icon: '📚'
        }
    ];

    return (
        <div id="education">
            <SectionTitle title={t("education.title")} />
            <div className="education-container">
                <div className="education-text">
                    <p className="edu-p p1">{t("education.description-a")}</p>
                    <p className="edu-p p2">{t("education.description-b")}</p>
                    <p className="edu-p p3">{t("education.current")}</p>
                </div>

                <div className="education-cards">
                    {educationData.map((edu) => (
                        <div key={edu.id} className="education-card">
                            <div className="card-icon">{edu.icon}</div>
                            <div className="card-content">
                                <h3 className="institution">{edu.institution}</h3>
                                <h4 className="degree">{edu.degree}</h4>
                                <span className="year">{edu.year}</span>
                                <p className="description">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education;