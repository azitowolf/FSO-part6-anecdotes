import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAction, createNoteAction } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  
  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createNoteAction(content))
  }

  const vote = (id) => {
    dispatch(voteAction(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm addNote={addNote} />
      <AnecdoteList anecdotes={anecdotes} vote={vote} />
      {/* <pre>{JSON.stringify(anecdotes, undefined, 2)}</pre> */}
    </div>
  )
}

export default App