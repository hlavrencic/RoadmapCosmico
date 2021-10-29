import React from 'react';
import { ForceGraph2D } from 'react-force-graph';

import logo from './logo.svg';
import './App.css';
import buildRandomTree from './buildRandomTree.js';

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <ForceGraph2D 
          graphData={buildRandomTree(40)}
          nodeAutoColorBy="group"
          linkDirectionalArrowLength={3.5}
          linkDirectionalArrowRelPos={1}
          linkCurvature={0.25}

        />
    </div>
  );
}

export default App;