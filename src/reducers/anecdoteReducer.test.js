import deepFreeze from 'deep-freeze'
import anecdoteReducer, { initializeAction } from './anecdoteReducer'

describe('anecdote reducer', () => {
    const anecdotesAtStart = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
        ]
    const getId = () => (100000 * Math.random()).toFixed(0)

    const asObject = (anecdote) => {
        return {
            content: anecdote,
            id: getId(),
            votes: 0
        }
    }
    const initialState = anecdotesAtStart.map(asObject)

  test('should return a proper initial state when called with test data', () => {
    const state = initialState
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = anecdoteReducer(state, action)
    expect(newState[0]).toEqual(expect.objectContaining({
        content: expect.any(String),
        id: expect.any(String),
        votes: 0
    }))
  })

  test('vote is incremented for an anecdote', () => {
    const action = {
      type: 'VOTE',
      anecdote: initialState[0].id
    }
    const state = initialState

    deepFreeze(state) // snapshot of the state, making sure we don't modify this non-functionally

    const newState = anecdoteReducer(state, action)
    expect(newState).toEqual(expect.arrayContaining ([
        {"content":"If it hurts, do it more often","id":expect.any(String),"votes":1},
        {"content":"Adding manpower to a late software project makes it later!","id":expect.any(String),"votes":0},
        {"content":"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.","id":expect.any(String),"votes":0},
        {"content":"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","id":expect.any(String),"votes":0},
        {"content":"Premature optimization is the root of all evil.","id":expect.any(String),"votes":0},
        {"content":"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.","id":expect.any(String),"votes":0}
    ]))
  })

  test('anecdote is added', () => {
    const action = {
      type: 'NEW_NOTE',
      data: asObject('this is a saying from the sea')
    }
    const state = initialState

    deepFreeze(state) // snapshot of the state, making sure we don't modify this non-functionally

    const newState = anecdoteReducer(state, action)
    expect(newState).toEqual(expect.arrayContaining ([
        {"content":"If it hurts, do it more often","id":expect.any(String),"votes":0},
        {"content":"Adding manpower to a late software project makes it later!","id":expect.any(String),"votes":0},
        {"content":"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.","id":expect.any(String),"votes":0},
        {"content":"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","id":expect.any(String),"votes":0},
        {"content":"Premature optimization is the root of all evil.","id":expect.any(String),"votes":0},
        {"content":"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.","id":expect.any(String),"votes":0},
        {"content":"this is a saying from the sea", "id":expect.any(String), "votes":0}
    ]))
  })

})