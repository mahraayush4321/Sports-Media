import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignipForm'
import ProfilePage from './pages/ProfilePage/ProfilePage';
import TournamentPage from './pages/TournamentPage/TournamentPage';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';
import ChatPage from './pages/ChatPage/ChatPage';
function App() {

  return (
    <>
     <Routes>
				<Route path='/' element={<LoginForm />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/register' element={< SignupForm/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/tournament' element={<TournamentPage/>}/>
        <Route path='/createPost' element={<CreatePostPage/>}/>
        <Route path='/chat' element={<ChatPage/>}/>
			</Routes>
    </>
  )
}

export default App
