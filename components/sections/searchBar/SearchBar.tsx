import styles from './SearchBar.module.css'
import { Search, MapPin } from 'lucide-react'

function SearchBar() {
  return (
    <div className={styles.search_bar_container}>
      <div className={styles.search}>
        <Search className={styles.search_icon} size={20} />
        <input 
          type="text" 
          className={styles.search_input} 
          placeholder="Rechercher des professionnels, services..." 
        />
      </div>
      <div className={styles.location}>
        <MapPin className={styles.location_icon} size={20} />
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
