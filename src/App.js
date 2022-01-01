import logo from './logo.svg';
import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import Private from './component/Private/Private'
import PrivateRoute from './component/PrivareRoute/PrivateRoute';
import Register from './component/Register/Register';
import MovieDetails from './component/MovieDetails/MovieDetails';
import Watchlist from './component/Watchlist/Watchlist';
import AddMovies from './component/AddMovies/AddMovies';
import MakeAdmin from './component/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/movie/:mId">
             <MovieDetails></MovieDetails>
            </PrivateRoute>
            <PrivateRoute path="/watchlist">
              <Watchlist></Watchlist>
            </PrivateRoute>
            <PrivateRoute path="/add-movies">
              <AddMovies></AddMovies>
            </PrivateRoute>
            <PrivateRoute path="/make-admin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
