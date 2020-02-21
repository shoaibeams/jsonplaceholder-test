import React from 'react'

export default class NoteForm extends React.Component {
  state = {
    subject: '',
    text: '',
    id: ''
  }

  handleTextChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubjectChange = event => {
    this.setState({ subject: event.target.value })
  }

  handleNoteSubmit = () => {
    const { subject, text } = this.state

    this.props.onNoteAdd({
      subject,
      text,
      id: Date.now()
    })
    this.setState({ subject: '', text: '' })
  }

  render() {
    const { subject, text } = this.state

    return (
      <>
        <div className="row">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="subject"
                type="text"
                onChange={this.handleSubjectChange}
                value={subject}
                className="validate"
                placeholder="Subject"
              />
            </div>
          </div>

          <div className="input-field col s12">
            <input
              placeholder="Write your note here"
              className="materialize-textarea"
              value={text}
              onChange={this.handleTextChange}
            />
          </div>
        </div>
        <button
          className="waves-effect waves-light btn"
          onClick={this.handleNoteSubmit}
        >
          Save
        </button>
      </>
    )
  }
}
