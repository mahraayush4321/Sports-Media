import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignipForm'
import ProfilePage from './pages/ProfilePage/ProfilePage';
import TournamentPage from './pages/TournamentPage/TournamentPage';
import CraetePostPage from './pages/CreatePostPage/CraetePostPage';
function App() {

  return (
    <>
     <Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/register' element={< SignupForm/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/tournament' element={<TournamentPage/>}/>
        <Route path='/createPost' element={<CraetePostPage/>}/>



			</Routes>
    </>
  )
}

export default App
