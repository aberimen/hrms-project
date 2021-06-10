import HomePage from './pages/HomePage'
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />

        <div>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </div>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
