import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from './views/landingPage/LandingPage'
import theme from './services/theme'
import { ThemeProvider } from '@mui/material'
import LoginView from './views/login/LoginView'
import firebaseConfig from './services/firebase.config'
import { initializeApp } from "firebase/app";
import Home from './views/home/Home'
import { useSelector } from 'react-redux'


const app = initializeApp(firebaseConfig);

/*
TODO: sign google, facebook
TODO: UPDATE post
TODO: Transitions
TODO: Carousel -> landingpage
TODO: Fav list to firebase
*/



function App() {
  const auth = useSelector(state => state.auth)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/login'>
              <LoginView />
            </Route>
            <Route exact path='/home' render={() => {
              return auth ? <Home /> : <Redirect to='/login' />
            }} />
          </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App
