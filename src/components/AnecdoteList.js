import React from 'react';
import Anecdote from './Anecdote'

const AnecdoteList = ({anecdotes, vote}) => {
    return (
        <div>
            {anecdotes.map(anecdote =>
                <Anecdote 
                    key = {anecdote.id} 
                    anecdote = {anecdote} 
                    vote = {vote} 
                />
            )}
        </div>
    )
}

export default AnecdoteList