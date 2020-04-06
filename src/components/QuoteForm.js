import React, { Component } from 'react';
import './QuoteForm.css';

class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: '',};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({character: event.target.character});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.character);
    event.preventDefault();
  }


  }
  render() {
    return (
      <form className="QuoteForm" onSubmit={event => event.preventDefault()}>
        <label htmlFor="character">Character:</label>
        <input
          id="name"
          name="character"
          type="text"
          value={this.state.character} onChange={this.handleChange}
          }}
        />
      </form>
    );
  }
}


export default QuoteForm;
