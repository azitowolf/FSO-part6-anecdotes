import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

  const style = {
    border: '1px solid black',
    padding: 10,
    borderWidth: 1
  }
  if (props.notification) {
    return (
      <div style={style}>
        {props.notification}
      </div>
    )
  } else {
    return ''
  }

}
const mapStateToProps = (state) => {
  return { notification: state.notification.note }
}

export default connect(mapStateToProps)(Notification) 