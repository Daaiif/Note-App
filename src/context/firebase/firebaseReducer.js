import { ADD_COMMENTS, ADD_NOTES, FETCH_COMMENTS, FETCH_NOTES, REMOVE_NOTES, SHOW_LOADER } from '../type';

const hendlers = {
  [SHOW_LOADER]: (state) => ({state, loading: true}),
  [ADD_NOTES]: (state, {payload}) => ({
    ...state,
    notes: [...state.notes, payload]
  }),
  [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false}),
  [REMOVE_NOTES]: (state, {payload}) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== payload)
  }),
  [ADD_COMMENTS]: (state, {payload}) => ({
    ...state,
    comments: [...state.comments, payload]
  }),
  [FETCH_COMMENTS]: (state, {payload}) => ({...state, comments: payload, loading: false}),
  DEFAULT: (state) => state
}

export const firebaseReducer = (state, action) => {
  const handle = hendlers[action.type] || hendlers.DEFAULT

  return handle(state, action)
}