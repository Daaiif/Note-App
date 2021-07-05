import React, { useState } from 'react';

import { Comments } from './Comments';
import { CommentForm } from './CommentForm';

export const Notes = ({ notes, onRemove, showAlert }) => {
  const [selectedNote, setSelectedNote] = useState(null)

  return (
    <ul className="list-goup ps-0 notes">
      {notes.map(note => (
        <li
          className="list-group-item notes_item"
          key={note.id}
        >
          <div className="d-flex justify-content-between">
            <strong>{note.name}</strong>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => {onRemove(note.id); showAlert('The Note was deleted success', 'success')}}
            >&times;</button>
          </div>
          <p className="content">{note.content}</p>

          <hr />
          
          <CommentForm id={note.id} />

          <div className="d-flex justify-content-end mb-3">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setSelectedNote(note.id)
              }}
            >
              Comments
            </button>
          </div>
          {selectedNote === note.id
            ? <Comments postId={note.id}/>
            : null
          }
          
        </li>
      ))}
    </ul>
  )
}