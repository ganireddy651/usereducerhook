import {useReducer, useEffect} from 'react'
import './index.css'

const initialState = {count: 0}

const click = 'click_count'

const reducer = (store, action) => {
  switch (action.type) {
    case click:
      return {count: action.payload}
    case 'Stored':
      return {count: action.payload}
    default:
      return store
  }
}

const ClickCounter = () => {
  const [store, dispatch] = useReducer(reducer, initialState)
  const {count} = store

  useEffect(() => {
    const storedValue = localStorage.getItem('number')
    if (storedValue !== null) {
      dispatch({type: click, payload: JSON.parse(storedValue)})
    }
  }, [])

  const increment = () => {
    const newCount = count + 1
    dispatch({type: click, payload: newCount})
    localStorage.setItem('number', JSON.stringify(newCount))
  }

  return (
    <div className="app-container">
      <h1>The Button has been clicked&nbsp;{count}&nbsp;times.</h1>
      <p>Click the button to increase the count!</p>
      <button type="button" onClick={increment}>
        Click
      </button>
    </div>
  )
}

export default ClickCounter
