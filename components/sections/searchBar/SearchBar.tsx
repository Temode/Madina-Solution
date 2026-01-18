import styles from './SearchBar.module.css'
function SearchBar() {
  return (
    <div className={styles.search_bar_container}>
      <div className={styles.search}>
        <svg className={styles.search_icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c." />
        </svg>
        <input 
          type="text" 
          className={styles.search_input} 
          placeholder="Rechercher des professionnels, services..." 
        />
      </div>
      <div className={styles.location}>
        <svg className={styles.location_icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0a5.53 5.53 0 0 0-5.5 5.5c0 3.038 2.737 5.864 5.5 9.5 2.763-3.636 5.5-6.462 5.5-9.5A5.53 5.53 0 0 0 8 0zm0 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
        </svg>
        <input 
          type="text" 
          className={styles.location_input} 
          placeholder="Lieu" 
        />
      </div>
        <button className={styles.search_button} type="button" >
          Rechercher</button>
    </div>
  )
}

export default SearchBar
