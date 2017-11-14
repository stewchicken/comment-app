import React, { Component } from 'react'
import CommentInputContainer from './CommentInput'
import CommentListContainer from './CommentList'

export default class CommentApp extends Component {
  render() {
    return (
      <div className='wrapper'>
        <CommentInputContainer />
        <CommentListContainer />
      </div>
    )
  }
}