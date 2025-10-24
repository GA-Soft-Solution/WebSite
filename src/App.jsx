// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import AppLayout from "./ui/AppLayout";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Teams from "./pages/Teams";
// import Projects from "./pages/Projects";
// import ProjectDetail from "./pages/ProjectDetail";
// import Careers from "./pages/Careers";
// import CareerDetail from "./pages/CareerDetail";
// import Blogs from "./pages/Blogs";
// import BlogDetail from "./pages/BlogDetail";
// import Contact from "./pages/Contact";
// import PageNotFound from "./pages/PageNotFound";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<AppLayout />}>
//           {/* <Route index element={<Navigate replace to="/" />} /> */}
//           <Route path="/" element={<Home />} />
//           <Route path="aboutus" element={<AboutUs />} />
//           <Route path="teams" element={<Teams />} />
//           <Route path="projects" element={<Projects />} />
//           <Route path="/projects/:id" element={<ProjectDetail />} />
//           <Route path="careers" element={<Careers />} />
//           <Route path="/careers/:id" element={<CareerDetail />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="/blogs/:id" element={<BlogDetail />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>

//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import AppLayout from "./ui/AppLayout";

// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Teams from "./pages/TeamsPage";
// import Projects from "./pages/Projects";
// import ProjectDetail from "./pages/ProjectDetail";
// import Careers from "./pages/Careers";
// import CareerDetail from "./pages/CareerDetail";
// import Blogs from "./pages/Blogs";
// import BlogDetail from "./pages/BlogDetail";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// // Admin pages
// import AdminLayout from "./ui/AdminLayout";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<AppLayout />}>
//           {/* <Route index element={<Navigate replace to="/" />} /> */}
//           <Route path="/" element={<Home />} />
//           <Route path="aboutus" element={<AboutUs />} />
//           <Route path="teams" element={<Teams />} />
//           <Route path="/teams/:id" element={<Teams />} /> {/* same component */}
//           <Route path="projects" element={<Projects />} />
//           <Route path="/projects/:id" element={<ProjectDetail />} />
//           <Route path="careers" element={<Careers />} />
//           <Route path="/careers/:id" element={<CareerDetail />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="/blogs/:id" element={<BlogDetail />} />
//           <Route path="contact" element={<Contact />} />
//           {/* <Route path="*" element={<PageNotFound />} /> */}
//           <Route path="*" element={<NotFound />} />
//           {/* <Route path="/admin" element={<AdminDash />} /> */}
//         </Route>
//         {/* Admin routes */}
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route index element={<Dashboard />} />
//         </Route> 
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Admin pages
import AdminLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dasboard";
import Users from "./pages/users";
import Settings from "./pages/role";
import Currency from "./pages/currency";
// Add missing admin components
import Counter from "./pages/Counter";
import Partner from "./pages/Partner";
import FAQ from "./pages/FAQ";
import Testimonial from "./pages/Testimonial";
import Team from "./pages/Team";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import Job from "./pages/Job";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="counter" element={<Counter />} />
          <Route path="partner" element={<Partner />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="team" element={<Team />} />
          <Route path="project" element={<Project />} />
          <Route path="blog" element={<Blog />} />
          <Route path="job" element={<Job />} />
          <Route path="users" element={<Users />} />
          <Route path="role" element={<Settings />} /> {/* Replaced role with settings */}
          <Route path="currency" element={<Currency />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

