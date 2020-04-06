import React, { Component } from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 10; // Feel free to change the value

class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {character: '',};
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    if (event.target.value.length <= MAX_LENGTH) {
    this.setState({character: event.target.value});
  }
  }

  render() {

    const {character} = this.state
    const {handleSubmit, handleChange} = this

    const lengthMaxReached = character.length >= MAX_LENGTH; 
    const remaining = MAX_LENGTH - character.length

    return (
      <form className="QuoteForm" onSubmit={handleSubmit}>
        <label htmlFor="character">Character:</label>
        <input
          className={lengthMaxReached ? 'length-maximum-reached' : 'length-ok'}
          id="name"
          name="character"
          type="text"
          value={character}
          onChange={handleChange}/>
          <p>{remaining} remaining characteres</p>
          <p>You typed: 
            <strong>{character.length}</strong>
          </p>
      </form>
    );
  }
}

export default QuoteForm;
