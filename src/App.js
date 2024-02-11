import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserConfig from './components/UserConfig/UserConfig';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Router>
        <Sidebar active={true}/>
        <Routes>
          <Route 
            exact 
            path='/' 
            element={
              <>
                <Header type="home"/>
                <Dashboard/>
              </>
            } 
          />
          <Route 
            exact 
            path='/user' 
            element={
              <>
                <Header type="user"/>
                <UserConfig/>
              </>
            } 
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
