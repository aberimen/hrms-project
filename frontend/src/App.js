import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import PostJobPage from './pages/PostJobPage';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />

        <div>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route path="/post-job" component={PostJobPage} />
          {/* <Redirect to="/" /> */}
        </div>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
