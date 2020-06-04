import React from 'react';

const AnecdoteForm = ({addNote}) => {
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addNote}>
            <input name="anecdote" /> 
            <button type="submit">add</button>
            </form>
        </div>
    )
}

export default AnecdoteForm