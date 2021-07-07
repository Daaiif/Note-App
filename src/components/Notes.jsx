import React, { } from 'react';

import { Comments } from './CommentList';
import { CommentForm } from './CommentForm';

export const Notes = ({ notes, onRemove, showAlert, onRemoveComments }) => {
  console.log("render")

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
              onClick={() => {onRemove(note.id); onRemoveComments(note.id); showAlert('The Note was deleted success', 'success')}}
            >&times;</button>
          </div>
          <p className="content">{note.content}</p>

          <hr />
          
          <CommentForm id={note.id} />

          <Comments noteId={note.id}/>
        </li>
      ))}
    </ul>
  )
}