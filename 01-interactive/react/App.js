function App() {
  const [paragraphText, setParagraphText] = React.useState('Click the button below to change this text!');
  
  function updateTextHandler() {
    setParagraphText('Text was changed!');
  }
  
  return (
    <>
      <p>{paragraphText}</p>
      <button onClick={updateTextHandler}>Click Me</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);