import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globalstyles';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import RegisterProject from './pages/RegisterProject';
import Page404 from './pages/Page404';
import Projects from './pages/Projects';
import ListOne from './pages/ListOne';
import Empty from './pages/Empty';
import NewActivity from './pages/NewActivity';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterProject} />
        <Route exact path="/newactivity/:id" component={NewActivity} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ListOne} />
        <Route exact path="/empty" component={Empty} />
        <Route component={Page404} />
      </Switch>
      <ToastContainer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
