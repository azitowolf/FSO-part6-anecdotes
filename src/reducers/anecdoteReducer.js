import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {

  switch(action.type){
    case 'VOTE':
      const id = action.anecdote
      const anecdoteToChange = state.find((anecdote) => anecdote.id === id)
      const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
      const anecdotes = state.map((anecdote) => anecdote.id === id ? changedAnecdote : anecdote)
      return anecdotes.sort(sortOrder)
      
    case 'NEW_NOTE':
      return state.concat([action.data])
    
    case 'INIT':
      return action.data
    
    default:
      return state
  }
}

//TODO: refactor

const sortOrder = (a,b) => {
  if (a.votes < b.votes) {
    return 1;
  } else if (a.votes > b.votes) {
    return -1;
  } else {
    return 0;
  }
}
export const voteAction = anecdote => {
  return async dispatch => {
    const updated = await anecdoteService.incrementVote(anecdote)
    dispatch({
      type: 'VOTE',
      anecdote: updated.id,
    })
  }
}

export const createNoteAction = val => {
  return async dispatch => {
    const content = await anecdoteService.createNew(val)
    dispatch({
      type: 'NEW_NOTE',
      data: content,
    })
  }
}

export const initializeAction = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes,
    })
  }
}



export default reducer