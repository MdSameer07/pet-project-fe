import { NavBar } from './components/NavBar';
import { Body } from './components/Body'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './components/LoginPage'
import { RegisterPage } from './components/RegisterPage'
import { GenrePages } from './components/GenrePages';
import { Movies } from './components/Movies';
import { QueryClientProvider, QueryClient } from 'react-query'
import { RecoilRoot } from 'recoil'
import { Profile } from './components/Profile';
import { Insights } from './components/Insights';
import { RequireAuth1 } from './components/RequireAuth1';
import { RequireAuth2 } from './components/RequireAuth2';
import { EachMovieDescription } from './components/EachMovieDescription';

const queryClient = new QueryClient()

function App() {

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
          <NavBar />
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path="/login" element={<RequireAuth2><LoginPage /></RequireAuth2>} />
            <Route path="/register" element={<RequireAuth2><RegisterPage /></RequireAuth2>} />
            <Route path="/home" element={<RequireAuth1><Body /></RequireAuth1>} />
            <Route path="/movies" element={<RequireAuth1><Movies /></RequireAuth1>} />
            <Route path="/:category" element={<RequireAuth1><GenrePages /></RequireAuth1>} />
            <Route path="/:id" element={<RequireAuth1><EachMovieDescription /></RequireAuth1>} />
            <Route path="/:category/:id" element={<RequireAuth1><EachMovieDescription /></RequireAuth1>} />
            <Route path="/insights" element={<RequireAuth1><Insights /></RequireAuth1>} />
            <Route path="/profile" element={<RequireAuth1><Profile /></RequireAuth1>} />
          </Routes>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
