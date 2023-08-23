import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
//   Link,
//   useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <h3>hello!!</h3>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="complete" element={<Users />} />
      </Routes>
  </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
  }
  
  function Complete() {
  return (<Link to="/">reset</Link>)
  }
  
  function Users() {
  return <h2>Users</h2>;
  }

export default App;
