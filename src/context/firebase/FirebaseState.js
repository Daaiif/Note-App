import axios from 'axios';
import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ADD_COMMENTS, ADD_NOTES, FETCH_COMMENTS, FETCH_NOTES, REMOVE_NOTES, SHOW_LOADER } from '../type';

import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
  const initialValue = {
    notes: [],
    comments: [],
    loading: false 
  }

  const [state, dispatch] = useReducer(firebaseReducer, initialValue)

  const showLoader = () => dispatch({type: SHOW_LOADER})

  const fetchNotes = async () => {
    showLoader()
    const res = await axios.get(`${url}/notes.json`)

    let payload = Object.keys(res.data).map(key => ({
      ...res.data[key],
      id: key
    }))

    if (!res.data) payload = []

    dispatch({type: FETCH_NOTES, payload})
  }

  const addNote = async (name, content) => {
    const note = {
      name,
      content,
      date: new Date().toLocaleDateString()
    }

    const res = await axios.post(`${url}/notes.json`, note)
    const payload = {
      ...note,
      id: res.data.name
    }

    dispatch({type: ADD_NOTES, payload})
  }

  const removeNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`)

    dispatch({type: REMOVE_NOTES, payload: id})
  }

  const addComment = (author, content, id) => {
    const comment = {
      postId: id,
      author,
      content,
      date: new Date().toLocaleDateString()
    }

    axios.post(`${url}/comments.json`, comment)

    const payload = {
      comment,
      id: uuidv4()
    }

    dispatch({type: ADD_COMMENTS, payload})
  }

  const fetchComments = async () => {
    const res = await axios.get(`${url}/comments.json`)

    let payload = Object.keys(res.data).map(key => ({
      ...res.data[key],
      id: key
    }))

    if (!res.data) return payload = []

    dispatch({type: FETCH_COMMENTS, payload})
  }

  return (
    <FirebaseContext.Provider value={{
      showLoader,
      fetchNotes,
      addNote,
      removeNote,
      loading: state.loading,
      notes: state.notes,
      comments: state.comments,
      addComment,
      fetchComments
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}