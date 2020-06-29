import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAction, createNoteAction, initializeAction } from './reducers/anecdoteReducer'
import { setNotificationAction } from './reducers/notificationReducer'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAction())
  }, [dispatch])

  const anecdotes = useSelector(state => {
    if (state.filter === '') return state.anecdotes
    if (state.filter.length) {
      const result = state.anecdotes.filter((anecdote) => {
        return anecdote.content.includes(state.filter)
      })
      return result
    }
    return state.anecdotes
  })

  const notification = useSelector(state => {
    return state.notification
  })

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createNoteAction(content))
    dispatch(setNotificationAction(`Added Anecdote: [${content}] to list`, 3, notification.intervalID))
  }

  const vote = (id) => {
    const anecdoteToUpdate = anecdotes.find((anecdote) => anecdote.id === id);     
    dispatch(voteAction(anecdoteToUpdate))
    dispatch(setNotificationAction(`voted successfully for anecdote # ${anecdoteToUpdate.id}`, 5, notification.intervalID))
  }

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteForm addNote={addNote} />
      <AnecdoteList vote={vote} />
      {/* <pre>{JSON.stringify(anecdotes, undefined, 2)}</pre> */}
    </div>
  )
}

export default App