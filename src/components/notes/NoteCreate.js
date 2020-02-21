import React from 'react'
import NoteForm from './NoteForm'

const NoteEdit = ({ onNoteAdd }) => {
  return (
    <div>
      <h3>Create a Note</h3>
      <NoteForm onNoteAdd={onNoteAdd} />
    </div>
  )
}

export default NoteEdit
