
import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import AllApplicantsPage from "./pages/AllApplicantsPage/AllApplicantsPage";
import PostJobPage from "./pages/PostJobPage/PostJobPage";

import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route path="/post" element={<PostJobPage />} />
          <Route path="/all" element={<AllApplicantsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
