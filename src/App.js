import { NavBar } from './components/NavBar';
import { Body } from './components/Body'
import { Routes, Route } from 'react-router-dom'
import { UserLoginPage } from './components/UserLoginPage'
import { RegisterPage } from './components/RegisterPage'
import { GenrePages } from './components/GenrePages';
import { Movies } from './components/Movies';
import { QueryClientProvider, QueryClient } from 'react-query'
import { RecoilRoot } from 'recoil'
import { Profile } from './components/Profile';
import { Insights } from './components/Insights';
import { ProtectedRoute1 } from './components/ProtectedRoute1';
import { ProtectedRoute2 } from './components/ProtectedRoute2';
import { EachMovieDescription } from './components/EachMovieDescription';
import { AdminLoginPage } from './components/AdminLoginPage';
import { ProtectedRoute3 } from './components/ProtectedRoute3';
import { AddMovie } from './components/AddMovie';
import { DeleteMovie } from './components/DeleteMovie';
import { GetFeedBack } from './components/GetFeedBack';

const queryClient = new QueryClient()

function App() {

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
          <NavBar />
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path="/user-login" element={<ProtectedRoute2><UserLoginPage /></ProtectedRoute2>} />
            <Route path="/admin-login" element={<ProtectedRoute2><AdminLoginPage/></ProtectedRoute2>}/>
            <Route path="/register" element={<ProtectedRoute2><RegisterPage /></ProtectedRoute2>} />
            <Route path="/home" element={<ProtectedRoute1><Body /></ProtectedRoute1>} />
            <Route path="/movies" element={<ProtectedRoute1><Movies /></ProtectedRoute1>} />
            <Route path="/:category" element={<ProtectedRoute1><GenrePages /></ProtectedRoute1>} />
            <Route path="/:id" element={<ProtectedRoute1><EachMovieDescription /></ProtectedRoute1>} />
            <Route path="/:category/:id" element={<ProtectedRoute1><EachMovieDescription /></ProtectedRoute1>} />
            <Route path="/insights" element={<ProtectedRoute1><Insights /></ProtectedRoute1>} />
            <Route path="/profile" element={<ProtectedRoute1><Profile /></ProtectedRoute1>} />
            <Route path="/adding" element={<ProtectedRoute3><AddMovie/></ProtectedRoute3>} />
            <Route path="/deleting" element={<ProtectedRoute3><DeleteMovie/></ProtectedRoute3>}/>
            <Route path="/feedback" element={<ProtectedRoute3><GetFeedBack/></ProtectedRoute3>}/>
          </Routes>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
