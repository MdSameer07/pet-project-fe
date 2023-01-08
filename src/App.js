import './App.css';
import {NavBar2} from './components/NavBar2'
import {Body} from './components/Body'
import {Routes,Route} from 'react-router-dom'
import {LoginPage} from './components/LoginPage'
import {RegisterPage} from './components/RegisterPage'
import { ThrillerMovies } from './components/ThrillerMovies';
import {HorrorMovies} from './components/HorrorMovies';
import { ActionMovies } from './components/ActionMovies';
import { ComedyMovies } from './components/ComedyMovies';
import { RomanceMovies } from './components/RomanticMovies';
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
        <Route path = '/thriller' element = {<ThrillerMovies/>}/>
        <Route path = '/horror' element = {<HorrorMovies/>}/>
        <Route path = '/action' element = {<ActionMovies/>}/>
        <Route path = '/comedy' element = {<ComedyMovies/>}/>
        <Route path = '/romance' element = {<RomanceMovies/>}/>
        <Route path = '/movies' element = {<Movies/>}/>
        <Route path = 'movies/:name' element = {<EachMovie/>}/>
        <Route path = 'thriller/:name' element = {<EachMovie/>}/>
        <Route path = 'romantic/:name' element = {<EachMovie/>}/>
        <Route path = 'horror/:name' element = {<EachMovie/>}/>
        <Route path = 'comedy/:name' element = {<EachMovie/>}/>
        <Route path = 'action/:name' element = {<EachMovie/>}/>
      </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
