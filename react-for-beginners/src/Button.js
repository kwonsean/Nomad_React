import PropTypes from 'prop-types'
// css파일을 객체 형태로 만들어줌
import styles from './Button.module.css'

function Button({ text }) {
  console.log(styles)
  return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button
