import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import ExamPage from './Components/ExamPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CreateExam from './Components/CreateExam';
import CreateTimetable from './Components/CreateTimetable';
import ProfileStudent from './Components/ProfileStudent';
import DetailState from './Components/Context/personalDetail/DetailState';
import QuestionState from './Components/Context/question/QuestionState';
import ShowTimeTable from './Components/ShowTimeTable';
import ShowQuestion from './Components/ShowQuestion';
import AnswerState from './Components/Context/answer/AnswerState';
import TimeTableState from './Components/Context/timeTable/TimeTableState';

function App() {
  return (
    <>
      <DetailState>
        <TimeTableState>
        <QuestionState>
          <AnswerState>
            <Router>
              <Navbar />
              <Switch>
                <Route exact path="/profileStudent">
                  <ProfileStudent />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
                <Route exact path="/exampage">
                  <ExamPage />
                </Route>
                <Route exact path="/createexam">
                  <CreateExam />
                </Route>
                <Route exact path="/createtimetable">
                  <CreateTimetable />
                </Route>
                <Route exact path="/showtimetable">
                  <ShowTimeTable />
                </Route>
                <Route exact path="/showquestion">
                  <ShowQuestion />
                </Route>
              </Switch>
              <Footer />
            </Router>
          </AnswerState>
        </QuestionState>
        </TimeTableState>
      </DetailState>
    </>
  );
}

export default App;
