import React from 'react';
import Login from './auction/components/login';
import Signup from './auction/components/signup';
import Landing from './auction/components/landing';
import { BrowserRouter, Routes,Route, Navigate} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './auction/components/redux/store';
import Bid from './auction/components/bid';
import Sidebar from './auction/components/side';
import Page2 from './auction/components/Page2';
import Side from './auction/components/side';
import Aboutus from './auction/components/pages/Aboutus';
import { UserProvider, useUser } from './auction/components/context/UserContext';
import Footer from './auction/Footer/foot';
import FeedbackForm from './auction/components/feedback';
import Admin from './auction/Admin/adlog';
import Privatepolicy from './auction/components/privatepolicy'
import FAQ from './auction/components/faq.jsx'
import Terms from'./auction/Admin/tac';
import List from './auction/components/listbid';
import Adminside from './auction/Admin/adminside';
import Adminuser from './auction/Admin/adminuser';
import Adminpro from './auction/Admin/adminproduct'
import Adminfeedback from './auction/Admin/adminfeedback';
import Adminclub from './auction/Admin/adminclub';

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
        <Route path="term" element={<Terms/>}/>
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
        <Route path="about" element ={<Aboutus/>}/>
        <Route path="bid" element={<Bid/>}/>
        <Route path="foot" element={<Footer/>}/>
        <Route path="adlo" element={<Admin/>}/>
        <Route path="list" element={<List/>}/>
        <Route path="admin/dash" element={<Adminside/>}/>
        <Route path="admin/user" element={<Adminuser/>}/>
        <Route path="admin/pro" element={<Adminpro/>}/>
        <Route path="admin/feedback" element={<Adminfeedback/>}/>
        <Route path="admin/club" element={<Adminclub/>}/>
        <Route path="feedback" element={<FeedbackForm/>}/>
        <Route path="policy" element={<Privatepolicy/>}/>
        <Route path="faq" element={<FAQ/>}/>
      
        </Routes>
    
        </UserProvider>
      </Provider>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
