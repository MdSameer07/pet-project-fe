import './App.css';
import { NavBar } from './components/NavBar';
import {Body} from './components/Body'
import {Routes,Route} from 'react-router-dom'
import {LoginPage} from './components/LoginPage'
import {RegisterPage} from './components/RegisterPage'
import { GenrePages } from './components/GenrePages';
import { Movies } from './components/Movies';
import { EachMovie } from './components/EachMovie';
import {QueryClientProvider,QueryClient} from 'react-query'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

function App() {

  return (
    <RecoilRoot>
    <QueryClientProvider client = {queryClient}>
    <>
    <NavBar/>
      <Routes>
        <Route path = '/' element = {<Body/>}/>
        <Route path = '/home' element = {<Body/>}/>
        <Route path = '/login' element = {<LoginPage/>}/>
        <Route path = '/register' element = {<RegisterPage/>}/>
        <Route path = '/movies' element = {<Movies/>}/>
        <Route path = '/:category' element = {<GenrePages/>}/>
        <Route path = '/:id' element = {<EachMovie/>}/>
        <Route path = ':category/:id' element = {<EachMovie/>}/>
      </Routes>
      </>
    </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
