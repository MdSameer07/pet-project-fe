import './App.css';
import {NavBar2} from './components/NavBar2'
import {Body} from './components/Body'
import {Routes,Route} from 'react-router-dom'
import {LoginPage} from './components/LoginPage'
import {RegisterPage} from './components/RegisterPage'
import { GenrePages } from './components/GenrePages';
import { Movies } from './components/Movies';
import { EachMovie } from './components/EachMovie';
import {QueryClientProvider,QueryClient} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client = {queryClient}>
      <NavBar2/>
      <Routes>
        <Route path = '/' element = {<Body/>}/>
        <Route path = '/login' element = {<LoginPage/>}/>
        <Route path = '/register' element = {<RegisterPage/>}/>
        <Route path = '/movies' element = {<Movies/>}/>
        <Route path = '/:category' element = {<GenrePages/>}/>
        <Route path = '/:id' element = {<EachMovie/>}/>
        <Route path = ':category/:id' element = {<EachMovie/>}/>
      </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
