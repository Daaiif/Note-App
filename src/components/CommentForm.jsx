import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const CommentForm = ({ id }) => {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const { addComment } = useContext(FirebaseContext)

  const handlerChange = (event, callback) => {
    const { value } = event.target;

    callback(value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault();

    addComment(author, content, id)
    setContent('')
    setAuthor('')
  }

  return (
    <>
      <p>Add Comment</p>
      <form onSubmit={handlerSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => handlerChange(e, setAuthor)}
          />
          <label htmlFor="author">Author</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => handlerChange(e, setContent)}
          />
          <label htmlFor="content">Content</label>
        </div>
        <button className="btn btn-primary">Post comment</button>
      </form>
    </>
  )
}