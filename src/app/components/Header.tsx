import React from 'react';
import styles from './Header.module.css';
interface HeaderProps {
    tags: Array<string>;
    onClick: (tag: string) => void;
    onClear: () => void;
}

const Header: React.FC<HeaderProps> = ({ tags, onClick, onClear }) => {
    const handleTagClick = (tag: string) => {
        onClick(tag); // Call the toggleTag function from the parent component
    };
    const handleTagClear = () => {
        onClear();
    }
    return (
        <header className={styles.header}>
            <picture className={styles.logo}>
                <source media="(max-width: 600px)" srcSet="./images/bg-header-mobile.svg" />
                <img src={"./images/bg-header-desktop.svg"} alt="Header Image" width="100%" />
            </picture>
            {tags.length>0?(
            <div className={styles.filterbar}>
                <div className={styles.filterbar_tags}>
                    {tags.map((tag: string, index: number) => (
                        <div className={styles.tag_container} key={index} >
                            
                            <div className={styles.tag} >{tag}</div>
                            <div className={styles.tag_after} onClick={() => handleTagClick(tag)}>X</div>
                        </div>
                    ))}
                </div>
                <div className={styles.filterbar_clear} onClick={() => handleTagClear()}>clear</div>
            </div>
            ):null}
        </header>
    );
};

export default Header;