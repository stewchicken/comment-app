import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Clock from './Clock'
import Card from './Card'

class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  componentWillMount() {
    this._loadComments()
  }

  _loadComments() {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }
  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleSubmitComment(comment) {
    console.log('submit in CommentAPP')
    if (!comment) return
    if (!comment.username) return alert('Enter name ')
    if (!comment.content) return alert('Enter comment ')
    /*
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
    */
    const comments = this.state.comments
    comments.push(comment)
    this.setState({ comments })
    this._saveComments(comments)
  }


  handleDeleteComment(index) {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }

  
  render() {
    return (
      <div className='wrapper'>

        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
      </div>
    )
  }
}

export default CommentApp
