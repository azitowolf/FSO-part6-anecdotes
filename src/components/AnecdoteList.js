import React from 'react';
import Anecdote from './Anecdote'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <Anecdote 
                    key = {anecdote.id} 
                    anecdote = {anecdote} 
                    vote = {props.vote} 
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log(state)
    return {
      anecdotes: state.anecdotes,
      filter: state.filter
    }
  }

export default connect(mapStateToProps)(AnecdoteList)