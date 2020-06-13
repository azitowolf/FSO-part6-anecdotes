const defaultNotification = ''

const notificationReducer = (state = defaultNotification, action) => {
  switch (action.type) {
    case 'SET_NOTE':
      return action.note
    default:
      return state
  }
}

export const setNotificationAction = (content, timeInMS) => {
  const timeInSec = timeInMS * 1000
  return async dispatch => {
    dispatch({
      type: 'SET_NOTE',
      note: content,
    })
    setTimeout(() => { dispatch({
      type: 'SET_NOTE',
      note: "",
    }) }, timeInSec)
  }
}

export default notificationReducer