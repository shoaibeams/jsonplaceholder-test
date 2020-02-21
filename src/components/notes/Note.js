import React from 'react'
import { Link } from 'react-router-dom'

const Note = ({ note }) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{note.subject}</span>
            <p>{note.text}</p>
          </div>
          <div className="card-action" key={note.id}>
            <Link to={`/notes/edit/${note.id}`}>Edit</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note
