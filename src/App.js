import { useState } from 'react'
import './index.scss';

function App() {
let [count, setCount] = useState(0);

  const onClickPlus = () => {
 setCount(count++)
  }
  const onClickMinuse = () => {
    setCount(count--)
     }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinuse} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
