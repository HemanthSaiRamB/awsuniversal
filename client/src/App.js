import './App.css';
import React, { useState, useEffect } from 'react'
function App() {
  const [user, setUser] = useState({name:'',age:"",Location:''})
  useEffect(() => {
    fetch('http://localhost:3001').then(res=>res.json()).then((json)=>{
      setUser(json)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Name: {user.name}
        </p>
        <p>
          Age: {user.age}
        </p>
        <p>
          Location: {user.Location}
        </p>
      </header>
    </div>
  );
}

export default App;
