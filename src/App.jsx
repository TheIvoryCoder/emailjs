import * as React from 'react';
import './App.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <h1 className="page__title">Contact Us</h1>
      <form className="contact__form">
        <label htmlFor="emailFrom">Email:</label>
        <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder="person@example.com"/>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" className="message__box"></textarea>
        <Button variant="contained" endIcon={<SendIcon />} className="submit__btn" style={{marginTop: "5px"}}>
        Send
      </Button>
      </form>
    </div>
  );
}

export default App;
