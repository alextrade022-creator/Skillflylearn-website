import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlacementsPage from './pages/PlacementsPage';
import CoursesPage from './pages/CoursesPage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

/** Route table. All pages share the same layout shell. */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="placements" element={<PlacementsPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="post" element={<PostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
