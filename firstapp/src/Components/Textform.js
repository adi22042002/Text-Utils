import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase","success");
    document.title='TextUtils-Uppercase';
  };

  const handleUpClicks = () => {
    let newtexts = text.toLowerCase();
    setText(newtexts);
    props.showAlert("converted to Lowercase","success");
  };

  const handleUpClicko = () => {
    let newtexto = '';
    setText(newtexto);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    if ('speechSynthesis' in window) {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
    } else {
      console.log('Text-to-speech is not supported in this browser.');
    }
  };

  return (
    <div>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
        </div>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleUpClicks}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary" onClick={handleUpClicko}>
        Clear Text
      </button>

      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">
        Speak
      </button>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.08 * text.split(' ').length} Minute read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
