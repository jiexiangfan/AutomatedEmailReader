/**
 * @file App.js
 * @description This file is the basic layer of App component. At the current stage, the file is the only page of the app.
 */
import './App.css';
import FlipCard from './FlipCard';

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
        <div className="card-container">
          <div className="card-vertical-center">
            <FlipCard />
          </div>
        </div>
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
