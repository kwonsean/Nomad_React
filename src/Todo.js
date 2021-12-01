import { useState } from 'react'

function Todo() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  const handleOnChange = (event) => setToDo(event.target.value)
  const handleOnSubmit = (event) => {
    event.preventDefault()
    if (toDo === '') return
    setToDos((currentArray) => [...currentArray, toDo])
    setToDo('')
  }
  return (
    <div>
      <h1>MY TO DOS ({toDos.length})</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handleOnChange}
          value={toDo}
          type='text'
          placeholder='Write your to do...'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
