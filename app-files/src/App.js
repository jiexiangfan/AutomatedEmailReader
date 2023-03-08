import './App.css';

function App() {
  const boxes = () => {
    let array = [],
      numberOfBox = 15;
    for (let i = 0; i < numberOfBox; i++) array.push(i);
    return array;
  };

  return (
    <div className="App">
      <div className="area">
        <ul className="circles">
          {boxes().map((i) => (
            <li key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
