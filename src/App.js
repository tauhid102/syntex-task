import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './Pages/Share/Navbar/Navbar';
import Content from './Pages/Content/Content';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddContent from './Pages/Dashboard/AddContent/AddContent';
import AllUser from './Pages/Dashboard/AllUser/AllUser';
import UserProfile from './UserProfile/UserProfile';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
        <RequireAuth>
          <Content></Content>
        </RequireAuth>} />
        <Route path='content' element={
        <RequireAuth>
          <Content></Content>
        </RequireAuth>} />
        <Route path='dashboard' element={
        <RequireAuth>
          <Dashboard/>
        </RequireAuth>}>
          <Route index element={<UserProfile></UserProfile>}></Route>
          <Route path='addContent' element={<AddContent></AddContent>}></Route>
          <Route path='allUser' element={<AllUser></AllUser>}></Route>
        </Route>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
