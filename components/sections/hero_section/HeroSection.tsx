//Hero section page
import SearchBar from '../searchBar/SearchBar'
import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <div>
      <section className={styles.hero_section}>
        <h1>Trouvez des professionnels qualifiés près de chez vous</h1>
        <p>Madina Solution est la plateforme de référence en Guinée pour la mise en relation entre clients et ouvriers qualifiés. Plomberie, électricité, BTP, informatique — trouvez le bon professionnel en quelques clics.</p>
      </section>
      <div className={styles.searchBar_wrapper}>
        <SearchBar />
      </div>
    </div>
  )
}

export default HeroSection
