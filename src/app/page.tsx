'use client'
import styles from './page.module.css'
import JobListing from './components/JobListing'
import data from '../app/data.json'
import Header from './components/Header'
import { useState } from 'react'

const Home: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const clearTags = () => {
    setSelectedTags([]);
  }

  const filteredData = data.filter((jobListing) => {
    return selectedTags.every((tag) => {
      return (
        jobListing.languages.includes(tag) ||
        jobListing.tools.includes(tag) ||
        jobListing.role === tag ||
        jobListing.level === tag
      );
    });
  });
  return (
    <div>
      <Header tags={selectedTags} onClick={removeTag} onClear={clearTags} />

      <main className={styles.main}>
        <div className={styles.card__container}>
          {filteredData.map((jobListing) => (
            <JobListing key={jobListing.id} jobListing={jobListing} toggleTag={addTag} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home;
