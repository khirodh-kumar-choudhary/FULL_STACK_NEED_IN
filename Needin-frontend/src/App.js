import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './customer/Components/Navbar/Navigation';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes';
import NotFound from './Pages/Notfound';
import AdminPannel from './Admin/AdminPannel';
import AdminLoginForm from './Admin/Views/AdminLoginForm';
import EmployeeRegistration from './customer/Components/EmployeeRegistration/EmployeeRegistration';
import Employeedashboard from './customer/Components/EmployeeRegistration/Employeedashboard';
import { ToastContainer } from 'react-toastify';
// import Routers from './Routers/Routers';

function App() {
  const isAdmin=true;
  return (
    <div className="">
          <ToastContainer />
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<AdminPannel />} />
        <Route path="/EmployeeForm" element={<EmployeeRegistration/>} />
        <Route path="/Employee" element={<Employeedashboard/>} />
        <Route path="/adminpan/*" element={<AdminLoginForm />} />
        
      </Routes>

      {/* <EmployeeRegistration/> */}
    </div>
  );
}

export default App;





