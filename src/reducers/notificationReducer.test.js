import deepFreeze from 'deep-freeze'
import notificationReducer from './notificationReducer'

describe('notification reducer', () => {

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = notificationReducer(undefined, action)

    expect(newState).toEqual('')
  })

  test('should process a change to the note', () => {
    const state = {}
    const action = {
      type: 'SET_NOTE',
      note: 'newNote'
    }

    const newState = notificationReducer(undefined, action)

    expect(newState).toEqual('newNote')
  })

})