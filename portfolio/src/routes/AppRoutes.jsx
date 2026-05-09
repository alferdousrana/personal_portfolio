import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProjectsPage from "../pages/ProjectsPage";
import NotFound from "../pages/NotFound";
import AchievementDetails from "../pages/AchievementDetails";
import BlogsPage from "../pages/BlogsPage";
import BlogDetails from "../pages/BlogDetails";

function AppRoutes({ theme, toggleTheme }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout theme={theme} toggleTheme={toggleTheme} />}
      >
        <Route index element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/achievements/:id" element={<AchievementDetails />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
