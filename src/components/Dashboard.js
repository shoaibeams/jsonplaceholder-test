import React from 'react'
import { Link } from 'react-router-dom'
import SurveyList from './notes/NotesList'

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link
          to="/surveys/new"
          className="btn-floating waves-effect waves-light btn-large red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
