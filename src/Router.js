import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Load from './components/loading'
const PopularMovie = React.lazy(() => import('./container/PopularMovie/index'));
const SearchMovie = React.lazy(() => import('./container/Search/index'));
const MovieDetail = React.lazy(() => import('./container/MovieDetail/index'))
const FavoriteMovie = React.lazy(() => import('./container/FavoriteMovie/index'))
const UpcomingMovie = React.lazy(() => import('./container/UpcomingMovie/index'))
// const Login = React.lazy(() => import('./container/Authentification/Login/index'))

function App() {
  return (
      <Suspense fallback={<Load/>}>
        <Switch>
          <Route exact path='/' component={SearchMovie} />
          <Route path='/popular-movie' component={PopularMovie} />
          <Route path='/movie-detail/:slug/:id' component={MovieDetail}/>
          <Route path='/favorite-movie' component={FavoriteMovie}/>
          <Route path='/upcoming-movie' component={UpcomingMovie}/>
          {/* <Route path='/login' component={Login}/> */}
        </Switch>
      </Suspense>
  );
}

export default App;
