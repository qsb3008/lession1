import React from 'react';
import './App.css';
// import ContextPage from './pages/ContextPage'
// import AntdFormPage from './pages/AntdFormPage'
import RefLearn from './pages/RefLearn'
import 'antd/dist/antd.css';

const storeRef = React.createRef()

function App() {
  const handleClick = () => {
    console.log(storeRef)
    storeRef.current.focus()
  }
  return (
    <div className="App">
      <div onClick={handleClick}>click</div>
      <RefLearn ref={storeRef}></RefLearn>
    </div>
  );
}

export default App;
