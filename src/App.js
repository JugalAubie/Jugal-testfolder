import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'
import Preview from './pages/Preview';
import CreateTemplate from './pages/CreateTemplate';
import Template from './pages/Template';

function App() {
  return (<div className="App container">
    <CreateTemplate />

    <Template />
    <hr/>
    <hr/>
    <Preview/>
    {/* <Router > */}

    {/* <li>
          <Link to="/"> home</Link>
        </li>
        <li>
          <Link to="/a">create Templet</Link>
        </li>
        <li>
          <Link to="/b">Users</Link>
        </li>

        <Routes>
        <Route path='/a' element={<Template/>} />
          <Route path="/a">
            <Template />
          </Route>
          <Route path="/b">
            <Preview />
          </Route>
          <Route path="/">
            <CreateTemplate />
          </Route>
        </Routes> */}
    {/* </Router> */}
  </div>
  );
}

export default App;
