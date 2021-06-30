import React, { useContext, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Comments = ({ postId }) => {

  const {comments, fetchComments} = useContext(FirebaseContext)
  
  useEffect(() => {
    fetchComments()
    // eslint-disable-next-line
  }, [])


  if (comments === undefined) return null

  const filteredComments = comments.filter(item => item.postId === postId)

  
  return (
    <ul className="list-goup">
      {filteredComments.map(item => (
        <li
          className="list-group-item"
          key={item.id}
        >
          <strong>{item.author}</strong>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  )
}