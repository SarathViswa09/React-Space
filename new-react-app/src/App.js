import './App.css';

function App() {

  const names = ['Sarath', 'Chandra', 'Viswanadh'];
  

  const getName = () => {
    if(names === null)
      return 'World'
  }
  return (
    <>
      <h1>Hello {getName()}</h1>
    </>
  );
}

export default App;
