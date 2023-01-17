import './App.css';
import { NavBar } from './components/NavBar';
import { Body } from './components/Body'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './components/LoginPage'
import { RegisterPage } from './components/RegisterPage'
import { GenrePages } from './components/GenrePages';
import { Movies } from './components/Movies';
import { EachMovie } from './components/EachMovie';
import { QueryClientProvider, QueryClient } from 'react-query'
import { RecoilRoot } from 'recoil'
import { AuthProvider } from './components/AuthProvider';
import { Profile } from './components/Profile';
import { Insights } from './components/Insights';
import { ProtectedRoute } from './components/ProtectedRoute';
import { ProtectedRoute1 } from './components/ProtectedRoute1';

const queryClient = new QueryClient()

function App() {

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/login' element={<ProtectedRoute1 Component={LoginPage} />} />
            <Route path='/register' element={<ProtectedRoute1 Component={RegisterPage} />} />
            <Route path='/home' element={<ProtectedRoute Component={Body} />} />
            <Route path='/movies' element={<ProtectedRoute Component={Movies} />} />
            <Route path='/:category' element={<ProtectedRoute Component={GenrePages} />} />
            <Route path='/:id' element={<ProtectedRoute Component={EachMovie} />} />
            <Route path=':category/:id' element={<ProtectedRoute Component={EachMovie} />} />
            <Route path='/insights' element={<ProtectedRoute Component={Insights} />} />
            <Route path='/profile' element={<ProtectedRoute Component={Profile} />} />
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
