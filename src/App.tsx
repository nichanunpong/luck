import { HashRouter, Routes, Route } from 'react-router-dom';
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
import BlogPage from './pages/Blog';
import BlogAgileMethodology from './pages/BlogAgileMethodology';
import BlogCreateBacklogPO from './pages/BlogCreateBacklogPO';
import BlogWhyQAMatters from './pages/BlogWhyQAMatters';
import './index.css';

export default function App() {
  return (
    <HashRouter>
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route
            path='/blog/agile-methodology'
            element={<BlogAgileMethodology />}
          />
          <Route
            path='/blog/create-backlog-po'
            element={<BlogCreateBacklogPO />}
          />
          <Route path='/blog/why-qa-matters' element={<BlogWhyQAMatters />} />
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
    </HashRouter>
  );
}
