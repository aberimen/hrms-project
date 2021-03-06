import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import PostJobPage from "./pages/PostJobPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import SignupPage from "./pages/SignupPage";
import JobsPage from "./pages/JobsPage/JobsPage";
import Footer from "./layouts/Footer";
import AccountSettingsPage from "./pages/AccountSettingsPage/AccountSettingsPage";
import { useSelector } from "react-redux";
import MyJobsPage from "./pages/MyJobsPage";
import JobApplicants from "./pages/JobApplicants";
import ResumePreviewPage from "./pages/ResumePreviewPage";

function App() {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <BrowserRouter>
      <Switch>
        {!isLoggedIn && <Route exact path="/login" component={LoginPage} />}

        <div>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route path="/post-job" component={PostJobPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/register" component={SignupPage} />
          <Route path="/employer" component={SignupPage} />
          <Route path="/account" component={AccountSettingsPage} />
          <Route path="/jobs" component={JobsPage} />
          <Route path="/resume-preview/:resumeId" component={ResumePreviewPage} />
          <Route exact path="/my-jobs" component={MyJobsPage} />
          <Route path="/my-jobs/:jobId" component={JobApplicants} />


          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
