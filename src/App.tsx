import { ForceGraph2D } from 'react-force-graph';

import './App.css';
import BasicGraph from './components/basicGraph';
import ColoredGraph from './components/coloredGraph';


function App() {
  return (
    <div className="App">
      <h1>Roadmap Cósmico</h1>
      {/* <BasicGraph length={40}/> */}
      <ColoredGraph />
    </div>
  );
}

export default App;