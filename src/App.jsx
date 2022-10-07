import './App.css';
import './style.css';
import { useState, useEffect } from 'react'
import Receipts from './components/Receipts';
import allReceipts from './models/receipt';

function App() {

  /*
[{key:"11", value:"1100"}, {key:"22", value:"2200"}].reduce(function(m,v){m[v.key] = v.value; return m;}, {})
var object = arr.reduce((obj, item) => (obj[item.key] = item.value, obj) ,{});
var object = arr.reduce(
  (obj, item) => Object.assign(obj, { [item.key]: item.value }), {});

  */
  const [receipts, setReceipts] = useState({
    receipt1: allReceipts[0],
    receipt2: allReceipts[1],
    receipt3: allReceipts[2]
  })

  // useEffect(() => {
  //   setReceipts(allReceipts.reduce((obj, item) =>
  //     Object.assign(obj, { [item.key]: item.value }), {}));

  //   console.log(`setReceipts: ${JSON.stringify(receipts)}`)
  // }, []);

  return (
    <div className="App">
      <h1 className="title"></h1>
      <Receipts key={`receipts`} receipts={receipts} />
    </div>
  );
}

export default App;
