import React from 'react'
import { useDispatch } from 'react-redux'
import { changeFilterAction } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()
        dispatch(changeFilterAction(event.target.value))
        // input-field value is in variable event.target.value
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter