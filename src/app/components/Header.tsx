import React from 'react';
import styles from './Header.module.css';
interface HeaderProps {
    tags: Array<string>;
    onClick: (tag: string) => void;
}

const Header: React.FC<HeaderProps> = ({ tags, onClick }) => {
    const handleTagClick = (tag: string) => {
        onClick(tag); // Call the toggleTag function from the parent component
    };
    return (
        <header className={styles.header}>
            <picture className={styles.logo}>
                <source media="(max-width: 600px)" srcSet="./images/bg-header-mobile.svg" />
                <img src={"./images/bg-header-desktop.svg"} alt="Header Image" width="100%" />
            </picture>
            <div className={styles.filterbar}>
                {tags.map((tag: string, index: number) => (
                    <div className={styles.tag} key = {index} onClick={() => handleTagClick(tag)}>{tag}</div>
                ))}
            </div>
        </header>
    );
};

export default Header;