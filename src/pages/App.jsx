import logo from '../assets/logo.svg'
import './App.css'
import { Button } from 'antd'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './login'
import Admin from './admin'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Admin}></Route>
      </Switch>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <Button type="primary">Primary Button</Button>
    //   <Button>Default Button</Button>
    //   <Button type="dashed">Dashed Button</Button>
    //   <br />
    //   <Button type="text">Text Button</Button>
    //   <Button type="link">Link Button</Button>
    // </div>
  );
}

export default App;
