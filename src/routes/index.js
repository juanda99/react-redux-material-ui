import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
// import CoreLayout from 'layouts/CoreLayout/CoreLayout'
// import HomeView from 'views/HomeView/HomeView'
import HomeView from 'views/HomeView2/HomeView'
// import SearchView from 'views/SearchView'
// import ApiView from 'views/ApiView'
// import BingoView from 'views/BingoView'
// import TableroView from 'views/TableroView'
// import DominoView from 'views/DominoView'
// import NotFoundView from 'views/NotFoundView/NotFoundView'
// import Header from 'layouts/Header'
import Master from 'components/master'
import auth from 'components/auth'

function requireAuth (nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default (
  <Route path='/' component={Master}>
    <IndexRoute component={HomeView}/>
    <Route path='home' component={HomeView} />
    <Route path='saac' component={HomeView} />
    <Route path='premios' component={HomeView} />
    <Route path='descargas' component={HomeView} />
    <Route path='condiciones-de-uso' component={HomeView} />
    <Redirect from='pictogramas' to='/pictogramas/buscar' />
    <Route path='pictogramas'>
        <Route path='buscar' component={HomeView} />
        <Route path='api' component={HomeView} />
    </Route>
    <Route path='materiales' component={HomeView} />

    <Redirect from='programas' to='/programas/bingo' />
    <Route path='programas'>
      <Route path='animacion' component={HomeView} />
      <Route path='simbolos' component={HomeView} />
      <Route path='horarios' component={HomeView} />
      <Route path='calendarios' component={HomeView} />
      <Route path='bingo' component={HomeView} />
      <Route path='oca' component={HomeView} />
      <Route path='domino' component={HomeView} />
      <Route path='domino-encadenados' component={HomeView} />
    </Route>
    // User Routes
    <Route path='signin' component={HomeView} />
    <Route path='register' component={HomeView} />
    <Route path='profile' component={HomeView} onEnter={requireAuth} />
    <Route path='usermaterial' component={HomeView} onEnter={requireAuth} />
    <Route path='upload' component={HomeView} onEnter={requireAuth} />
    <Route path='translate' component={HomeView} onEnter={requireAuth} />
    <Route path='signout' component={HomeView} onEnter={requireAuth} />
  </Route>
)
