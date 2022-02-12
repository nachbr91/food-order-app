import { Fragment } from 'react'

import styles from './Header.module.css'
import mealsImage from '../../assets/meals.jpeg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="Food" />
      </div>
    </Fragment>
  )
}

export default Header
