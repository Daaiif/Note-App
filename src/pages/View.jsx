import React, {useContext, useEffect } from 'react';

import { Loader } from '../components/Loader';
import { Notes } from '../components/Notes'
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/FirebaseProvider';


export const View = () => {
  const { loading, notes, fetchNotes, removeNote, removeComments} = useContext(FirebaseContext)
  const { show } = useContext(AlertContext)

  useEffect(() => {
    fetchNotes()
  // eslint-disable-next-line
  }, [])


  return (
    <>
      {loading 
        ? <Loader />
        : <Notes notes={notes || []} onRemove={removeNote} showAlert={show} onRemoveComments={removeComments} />
      }
    </>
  )
}