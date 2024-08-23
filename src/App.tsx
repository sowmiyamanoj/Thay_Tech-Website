
import React from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import CorporateTraining from './components/service/CorporateTraining';
import OnJobTraining from './components/service/OnJobTraining';



const App: React.FC = () => {
  return (
    <div>
    <Router>
     <Navbar/>
    <Routes>
     <Route path='*' element={<HomePage />} />
     <Route path='/CorporateTraining' element={<CorporateTraining />} />
     <Route path='/OnJobTraining' element={<OnJobTraining />} />
     
     </Routes>
   </Router>
  
 </div>
  );
};

export default App;
