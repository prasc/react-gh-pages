import './App.css';
import Header from './Components/Header';
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import Review from './Pages/Review';
import Settings from './Pages/Settings';
import Search from './Pages/Search';
import Footer from './Components/Footer';
import  Button from './Components/Button';
import ChangeSettings from './Pages/ChangeSettings';
import AddSearch from './Pages/AddSearch';
import LeaveComment from './Pages/LeaveComment';
import ChangeAppStatus from './Pages/ChangeAppStatus';
import CreateNewAccount from './Pages/CreateNewAccount';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />

        <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/changesettings" >
            <ChangeSettings />
          </Route>
          <Route path="/addsearch" >
            <AddSearch />
          </Route>
          <Route path="/leavecomment" >
            <LeaveComment />
          </Route>
          <Route path="/changeappstatus" >
            <ChangeAppStatus />
          </Route>
          <Route path="/createnewacc" >
            <CreateNewAccount />
          </Route>
          <Route path="/react-gh-pages">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
