import './App.css';
import { nanoid } from 'nanoid';
import {zbroj, razlika, umnozak, dijeljenje} from './Utilities';

function App() {
  
  return (
    <div>
      <h1>Luka Žagar</h1>
      {nanoid()},
      <div>
        2 + 2 = {zbroj(2,2)}
      </div>
      <div>
        10 - 2 = {razlika(10,2)}
      </div>
      <div>
        2 * 2 = {umnozak(2,2)}
      </div>
      <div>
        100 / 2 = {dijeljenje(100,2)}
      </div>
    </div>
    
  );
}

export default App;
