
import React from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import CorporateTraining from './components/service/CorporateTraining';
import OnJobTraining from './components/service/OnJobTraining';
import ProjectTraining from './components/service/ProjectTraning';
import OnlineOffline from './components/service/OnlineOffline';
import Tech from './components/service/Tech';



const App: React.FC = () => {
  return (
    <div>
     <Router>
     <Navbar/>
    <Routes>
     <Route path='*' element={<HomePage />} />
     <Route path='/CorporateTraining' element={<CorporateTraining />} />
     <Route path='/OnJobTraining' element={<OnJobTraining />} />
     <Route path='/ProjectTraining' element={<ProjectTraining />} />
     <Route path='/OnlineOffline' element={<OnlineOffline />} />
     <Route path='/Tech' element={<Tech />} />
     </Routes>
   </Router> 
   
   
  
 </div>
  );
};

export default App;
