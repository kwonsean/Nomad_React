import Button from './Button'
import styles from './App.module.css'
import Button2 from './Button2'
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text='Click!' />
      <Button2 text='COPY!' />
    </div>
  )
}

export default App
