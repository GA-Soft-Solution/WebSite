import Dashboard from "/images/Dashboard.png";
import counter from "/images/Counter.png";
import Partner from "/images/partner.png";
import Currency from "/images/Currency.png";
import Blog from "/images/Blog.png";
import FAQ from "/images/FAQ.png";
import Testimonial from "/images/Testimonial.png";
import Job from "/images/Blog.png";
import Team from "/images/partner.png";
import Project from "/images/Project.png";



   const menuItems = [
    { title: "Dashboard", path: "/admin", icon: Dashboard }, // Updated to /admin
    { title: "Counter", path: "/admin/counter", icon: counter }, // Nested under /admin
    { title: "Partner", path: "/admin/partner", icon: Partner },
    { title: "FAQ", path: "/admin/faq", icon: FAQ },
    { title: "Testimonial", path: "/admin/testimonial", icon: Testimonial },
    { title: "Team", path: "/admin/team", icon: Team },
    { title: "Project", path: "/admin/project", icon: Project },
    { title: "Blog", path: "/admin/blog", icon: Blog },
    { title: "Job", path: "/admin/job", icon: Job }
  ];
   export default menuItems;
