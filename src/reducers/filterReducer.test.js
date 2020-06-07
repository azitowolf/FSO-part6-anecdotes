import deepFreeze from 'deep-freeze'
import filterReducer from './filterReducer'

describe('filterreducer', () => {

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = filterReducer(undefined, action)

    expect(newState).toEqual('')
  })

  test('should process a change to the filter', () => {
    const state = {}
    const action = {
      type: 'CHANGE_FILTER',
      data: 'Test Content'
    }

    const newState = filterReducer(undefined, action)

    expect(newState).toEqual('Test Content')
  })

})