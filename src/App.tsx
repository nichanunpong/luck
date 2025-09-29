import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import SideProjects from './pages/SideProjects';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import ExperienceTalaadthai from './pages/ExperienceTalaadthai';
import ExperienceViriyah from './pages/ExperienceViriyah';
import ExperienceShareinvestor from './pages/ExperienceShareinvestor';
import ExperienceGarena from './pages/ExperienceGarena';
import ExperienceMFEC from './pages/ExperienceMFEC';
import ExperienceFoodPassion from './pages/ExperienceFoodPassion';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/side-projects' element={<SideProjects />} />
          <Route path='/case-studies' element={<CaseStudies />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/experience/talaadthai-online'
            element={<ExperienceTalaadthai />}
          />
          <Route path='/experience/viriyah' element={<ExperienceViriyah />} />
          <Route
            path='/experience/shareinvestor'
            element={<ExperienceShareinvestor />}
          />
          <Route path='/experience/garena' element={<ExperienceGarena />} />
          <Route path='/experience/mfec' element={<ExperienceMFEC />} />
          <Route
            path='/experience/food-passion'
            element={<ExperienceFoodPassion />}
          />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}
