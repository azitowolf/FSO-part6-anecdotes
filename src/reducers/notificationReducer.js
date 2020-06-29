const defaultNotification = {note: '', intervalID: null}

const notificationReducer = (state = defaultNotification, action) => {
  switch (action.type) {
    case 'SET_NOTE':
      return {note: action.note, intervalID: action.intervalID}
    default:
      return state
  }
}

export const setNotificationAction = (content, timeInMS = 5, intervalID = null) => {
  if(content === undefined) return
  const timeInSec = timeInMS * 1000
    
  if (intervalID) clearTimeout(intervalID)

  return async dispatch => {
    let newInterval = setTimeout(() => { 
      dispatch({
        type: 'SET_NOTE',
        note: "",
        intervalID: null
      }) 
    }, timeInSec)

    dispatch({
      type: 'SET_NOTE',
      note: content,
      intervalID: newInterval
    })
  }
}

export default notificationReducer