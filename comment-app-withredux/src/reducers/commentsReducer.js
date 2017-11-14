// action types
const INIT_COMMNETS = 'INIT_COMMNETS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

// reducer
export default function (state, action) {

  if (!state) {
    state = { comments: [] }
  }

  //here based on action type change store's state, return a new immutable state 
  console.log("typeof: "+ typeof action +" action = " +action)
  switch (action.type) {
    case INIT_COMMNETS:
      // init comments
      return { comments: action.comments }
    case ADD_COMMENT:
      // add comment
      return {
        comments: [...state.comments, action.comment]
      }
    case DELETE_COMMENT:
      // delete comment
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}

// action creators
export const initComments = (comments) => {
  return { type: INIT_COMMNETS, comments }
}

export const addComment = (comment) => {
  return { type: ADD_COMMENT, comment }
}

export const deleteComment = (commentIndex) => {
  return { type: DELETE_COMMENT, commentIndex }
}
