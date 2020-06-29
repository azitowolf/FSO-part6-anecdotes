import deepFreeze from 'deep-freeze'
import notificationReducer from './notificationReducer'

describe('notification reducer', () => {

  test('should return a proper initial state when called with undefined state', () => {
    const state = undefined
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = notificationReducer(state, action)

    expect(newState).toEqual({"intervalID": null, "note": ""})
  })

  test('should process a change to the note', () => {
    const state = {}
    const action = {
      type: 'SET_NOTE',
      note: 'newNote',
      intervalID: 10
    }

    const newState = notificationReducer(undefined, action)

    expect(newState).toEqual({"intervalID": 10, "note": 'newNote'})
  })

})