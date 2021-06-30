import React, { useContext, useEffect } from 'react';
import { Form } from '../components/Form'
import { Loader } from '../components/Loader';
import { Notes } from '../components/Notes'
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)
  const { show } = useContext(AlertContext)

  useEffect(() => {
    fetchNotes()
  // eslint-disable-next-line
  }, [])

  return (
    <>
      <Form />

      <hr/>

      {loading 
        ? <Loader />
        : <Notes notes={notes} onRemove={removeNote} showAlert={show}/>
      }
      
    </>
  )
}