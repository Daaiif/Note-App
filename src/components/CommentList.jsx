import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../context/firebase/FirebaseProvider';

export const Comments = ({ noteId }) => {
  const [isVisible, setIsVisible] = useState(false)
  const {comments, fetchComments} = useContext(FirebaseContext)

  console.log(comments)

  useEffect(() => {
    async function fetchData() {
      await fetchComments()
    }

    fetchData()
    // eslint-disable-next-line
  }, [])

  if (comments === undefined) return null

  const filteredComments = comments.filter(item => item.noteId === noteId)


  
  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-outline-primary"
          onClick={() => {setIsVisible(!isVisible)}}
        >
          Comments
        </button>
      </div>
      {isVisible && 
        <ul className="list-goup">
        {filteredComments.map(item => (
          <li
            className="list-group-item"
            key={item.id}
          >
            <strong>{item.author}</strong>
            <p>{item.content}</p>
            <span>{item.date}</span>
          </li>
        ))}
      </ul>
      }
      
    </>
  )
}