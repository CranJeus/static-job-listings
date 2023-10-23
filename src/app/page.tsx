import Image from 'next/image'
import styles from './page.module.css'
import JobListing from './components/JobListing'
import data from '../app/data.json'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card__container}>
        {data.map((jobListing) => (
          <JobListing key={jobListing.id} jobListing={jobListing}/>
        ))}
      </div>
    </main>
  )
}
