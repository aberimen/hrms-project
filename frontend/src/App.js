import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import PostJobPage from "./pages/PostJobPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import SignupPage from "./pages/SignupPage";
import JobsPage from "./pages/JobsPage/JobsPage";
import Footer from "./layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />

        <div>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route path="/post-job" component={PostJobPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/register" component={SignupPage} />
          <Route path="/employer" component={SignupPage} />
          <Route path="/jobs" component={JobsPage} />


          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
