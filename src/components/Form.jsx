import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/FirebaseProvider';

export const Form = () => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const handlerChange = (event, callback) => {
    const { value } = event.target;

    callback(value)
  }

  const handlerSubmit = (event) => {
    event.preventDefault()
    if (name.trim() && content.trim()) {
      firebase.addNote(name.trim(), content.trim())
      alert.show('The note was created', 'success')
      setName('')
      setContent('')
    } else {
      alert.show('Enter name and content')
    }
  }


  return (
    <form onSubmit={handlerSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Please enter the name of author"
          id="name"
          value={name}
          onChange={(event) => handlerChange(event, setName)}
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="content"
          style={{height: "100px"}}
          value={content}
          onChange={(event) => handlerChange(event, setContent)}
        />
        <label htmlFor="content">Content</label>
      </div>
      <button
        className="btn btn-primary"
      >
        Add
      </button>
    </form>
  )
}