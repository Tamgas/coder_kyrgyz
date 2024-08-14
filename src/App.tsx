import React from 'react';

import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Vacancies from './components/Vacancies';
import Events from './components/Events';
import Video from './components/Video';
import Organizations from './components/Organizations';
import Community from './components/Community';
import Home from './components/Home';
import DetalVideo from './components/DetalVideo';
import DetalOrganiz from './components/DetalOrganiz';
import NewDetalOrg from './components/NewDetalOrg';
import DetalMerop from './components/DetalMerop';
import DetailVacancy from './components/DetailVacancy';
import Auth from './components/Auth';
import AddVacan from './components/AddVacan';

function App() {
  return (
    <div className="App">
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/vacancy' element={<Vacancies/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/video' element={<Video/>}/>
          <Route path='/organization' element={<Organizations/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/detalvideo' element={<DetalVideo/>}/>
          <Route path='/detalorganiz' element={<DetalOrganiz/>}/>
          <Route path='/newDetalOrg' element={<NewDetalOrg/>}/>
          <Route path='/detalmerop' element={<DetalMerop/>}/>
          <Route path='/detailvacancy' element={<DetailVacancy/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/addVacan' element={<AddVacan/>}/>
        </Routes>
    <Footer/>
  
    </div>
  );
}

export default App;
