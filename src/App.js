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
import Canteen from './Pages/Canteen/Canteen';
import Footer from './Pages/Share/Footer/Footer';
import Menu from './Pages/Menu/Menu';
import Breakfast from './Pages/Menu/Breakfast/Breakfast';
import Lunch from './Pages/Menu/Lunch/Lunch';
import Drinks from './Pages/Menu/Drinks/Drinks';
import Desert from './Pages/Menu/Desert/Desert';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageOrder from './Pages/Dashboard/ManageOrder/ManageOrder';
import ManageFoodIteam from './Pages/Dashboard/ManageFoodIteam/ManageFoodIteam';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
        <RequireAuth>
          <Canteen></Canteen>
        </RequireAuth>} />
        <Route path='/myOrder' element={
        <RequireAuth>
          <MyOrder></MyOrder>
        </RequireAuth>} />
        <Route path='canteen' element={
          <Canteen></Canteen>
        } />
        <Route path='menu' element={
        <RequireAuth>
          <Menu/>
        </RequireAuth>}>
          <Route index element={<Content></Content>}></Route>
          <Route path='content' element={<Content></Content>}></Route>
          <Route path='breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='drinks' element={<Drinks></Drinks>}></Route>
          <Route path='desert' element={<Desert></Desert>}></Route>
        </Route>
        <Route path='dashboard' element={
        <RequireAuth>
          <Dashboard/>
        </RequireAuth>}>
          <Route index element={<UserProfile></UserProfile>}></Route>
          <Route path='addContent' element={<AddContent></AddContent>}></Route>
          <Route path='allUser' element={<AllUser></AllUser>}></Route>
          <Route path='manageOrder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='manageFood' element={<ManageFoodIteam></ManageFoodIteam>}></Route>
        </Route>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
