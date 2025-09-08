import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Teams from "./pages/TeamsPage";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* <Route index element={<Navigate replace to="/" />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="teams" element={<Teams />} />
          <Route path="/teams/:id" element={<Teams />} /> {/* same component */}
          <Route path="projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="careers" element={<Careers />} />
          <Route path="/careers/:id" element={<CareerDetail />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
