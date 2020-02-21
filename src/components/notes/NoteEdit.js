import React, { Component } from 'react'
import NoteForm from './NoteForm'
// import _ from 'lodash'

class NoteEdit extends Component {
  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues)
  }

  render() {
    return (
      <div>
        <h3>Edit Your Note</h3>
        <NoteForm />
        {/* <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        /> */}
      </div>
    )
  }
}

export default NoteEdit
