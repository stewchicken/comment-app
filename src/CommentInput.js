import React, { Component } from 'react'

class CommentInput extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }

  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit () {
    console.log('submit in ComentInput')
    console.log('in CommentInput this.props.onSubmit: '+this.props)

    //CommentApp is parent ,CommentApp pass its callback onSubmit to its' child CommentInput via props
    // CommentInput will call this callback onSubmit and pass this.state.username and this.state.content as Comment params
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
      })
    }
    this.setState({ content: '' })
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>UserName：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>Comment：</span>
          <div className='comment-field-input'>
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button
            onClick={this.handleSubmit.bind(this)}>
            Publish
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput
