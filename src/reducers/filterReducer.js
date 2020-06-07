const defaultFilter = ''

const filterReducer = (state = defaultFilter, action) => {
  console.log('state: ' + state, 'action: ' + action)
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.data
    default:
      return state
  }
}

export const changeFilterAction = (content) => {
  return {
    type: 'CHANGE_FILTER',
    data: content
  }
}

export default filterReducer