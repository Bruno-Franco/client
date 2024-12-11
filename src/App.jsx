import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { ProtectedAdminRoute } from '../components/ProtectedAdminRoute';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import FoodListPage from '../pages/FoodListPage';
import UserProfilePage from '../pages/UserProfilePage';
import AdminPage from '../pages/AdminPage';

function App() {
  return (
    <>
      <Nav />
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<FoodListPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <UserProfilePage />
              </ProtectedRoute>

            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminPage />
              </ProtectedAdminRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>);
}

export default App;
