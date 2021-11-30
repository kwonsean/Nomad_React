import { useState, useEffect } from 'react'
import Button from './Button'
import styles from './App.module.css'
import Button2 from './Button2'
function App() {
  const [counter, setCounter] = useState(0)
  const [keyword, setKeyword] = useState('')
  const onClick = () => setCounter((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)

  console.log('i run always')

  useEffect(() => {
    console.log('i just run first time')
  }, [])

  useEffect(() => {
    if (keyword !== '' && keyword.length > 3) {
      console.log('SEARCH FOR', keyword)
    }
  }, [keyword])
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search here..'
      />
      <h3>{counter}</h3>
      <Button text='Click!' onClick={onClick} />
      <Button2 text='COPY!' />
    </div>
  )
}

export default App
