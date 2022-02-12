import styles from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food, Delivered to you</h2>
      <p>
        Choose your favorite meal from our broad selection of available melas
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredientes, just-in-time
        and of course by experienced chefs!
      </p>
    </section>
  )
}

export default MealsSummary
