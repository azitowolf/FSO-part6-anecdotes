const defaultNotification = ''

const notificationReducer = (state = defaultNotification, action) => {
  console.log('state: ' + state, 'action: ' + action)
  switch (action.type) {
    case 'SET_NOTE':
      return action.note
    default:
      return state
  }
}

export const setNotificationAction = (content) => {
  return {
    type: 'SET_NOTE',
    note: content
  }
}

export default notificationReducer