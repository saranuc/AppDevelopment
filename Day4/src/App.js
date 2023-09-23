import React from 'react';
import Login from './auction/components/login';
import Signup from './auction/components/signup';
import Landing from './auction/components/landing';
import { BrowserRouter, Routes,Route, Navigate} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './auction/components/redux/store';
import Bid from './auction/components/bid';
import Home from './auction/components/pages/home';
import Sidebar from './auction/components/side';
import Page2 from './auction/components/Page2';
import Side from './auction/components/side';
import Aboutus from './auction/components/pages/Aboutus';
import { UserProvider, useUser } from './auction/components/context/UserContext';
function App() {

  const PrivateRoute = ({ children }) => {
    const { isUserLoggedIn } = useUser();
    return isUserLoggedIn ? children : <Navigate to="/login" replace />;
};
  return (
    
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
        <UserProvider>

      <Routes>
        <Route index element={<Landing/>}/>
        <Route path="login" element ={<Login/>}/>
        <Route path="up" element ={<Signup/>}/>
        <Route path="side" element={
         <PrivateRoute>
        <Side/>
         </PrivateRoute>}/>
        <Route path="side1" element ={
   
           <Sidebar/>
    
      }/>
        <Route path="page2" element ={<Page2/>}/>
        <Route path="aboutus" element ={<Aboutus/>}/>
        <Route path="bid " element={<Bid/>}/>
      </Routes>
    
        </UserProvider>
      </Provider>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
