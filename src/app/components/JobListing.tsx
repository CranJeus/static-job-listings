
import React from 'react';
import styles from './JobListing.module.css';

interface jobListingProps {
    jobListing: {
        id: number;
        company: string;
        logo: string;
        new: boolean;
        featured: boolean;
        position: string;
        role: string;
        level: string;
        postedAt: string;
        contract: string;
        location: string;
        languages: Array<string>;
        tools: Array<string>;
    };
    toggleTag: (tag: string) => void;
}

const JobListing: React.FC<jobListingProps> = ({ jobListing, toggleTag }) => {
    const handleTagClick = (tag: string) => {
        toggleTag(tag); // Call the toggleTag function from the parent component
    };

    return (
        <div className={styles.card}>
            <picture className={styles.card__logo}><img src={jobListing.logo} alt={jobListing.company} /></picture>
            <div className={styles.card__left}>
                <div className={styles.card__titlebar}>
                    <h2 className={styles.card__title}>{jobListing.company}</h2>
                    {jobListing.new && (<p className={styles.pill__new}>NEW!</p>)}
                    {jobListing.featured && (<p className={styles.pill__featured}>FEATURED</p>)}
                </div>
                <h1 className={styles.card__position}>{jobListing.position}</h1>
                <div className={styles.card__details}>
                    <p className={styles.card__paragraph}>{jobListing.postedAt}</p>
                    <p className="card__separator">•</p>
                    <p className={styles.card__paragraph}>{jobListing.contract}</p>
                    <p className="card__separator">•</p>
                    <p className={styles.card__paragraph}>{jobListing.location}</p>
                </div>
                <div className="card__hr" />
            </div>
            <div className={styles.card__right}>
                
                {jobListing.tools.map((tag: string, index: number) => (
                    <div className={styles.card__tag_tool} key={index} onClick={() => handleTagClick(tag)}>{tag} </div>
                ))}
                {jobListing.languages.map((tag: string, index: number) => (
                    <div className={styles.card__tag_language} key={index}onClick={() => handleTagClick(tag)}>{tag}</div>
                ))}
                <div className={styles.card__tag_level}onClick={() => handleTagClick(jobListing.level)} >{jobListing.level}</div>
                <div className={styles.card__tag_role} onClick={() => handleTagClick(jobListing.role)}>{jobListing.role}</div>
            </div>
        </div>
    );
};

export default JobListing;