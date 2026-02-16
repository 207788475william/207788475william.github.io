import React from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { LayoutGrid, FileText, User, Sparkles } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Inspiration from './pages/Inspiration';
import ArticleDetail from './pages/ArticleDetail';
import Reports from './pages/Reports';
import Profile from './pages/Profile';

const BottomNav = () => {
  const location = useLocation();
  
  // Hide bottom nav on detail pages for immersive reading
  if (location.pathname.includes('/article/')) {
    return null;
  }
  
  const navItems = [
    { id: 'dashboard', label: '看板', path: '/', icon: <LayoutGrid size={22} strokeWidth={1.5} /> },
    { id: 'inspiration', label: '刊物', path: '/inspiration', icon: <Sparkles size={22} strokeWidth={1.5} /> },
    { id: 'reports', label: '报表', path: '/reports', icon: <FileText size={22} strokeWidth={1.5} /> },
    { id: 'profile', label: '设置', path: '/profile', icon: <User size={22} strokeWidth={1.5} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-muji-paper/95 backdrop-blur-sm border-t border-muji-border flex justify-around items-center pb-safe-area-inset-bottom h-16 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.id}
            to={item.path}
            className={`flex flex-col items-center gap-1 w-full h-full justify-center transition-colors duration-300 ${
              isActive ? 'text-muji-accent' : 'text-muji-sub'
            }`}
          >
            <div className={`transform transition-transform duration-300 ${isActive ? 'scale-105' : ''}`}>
              {item.icon}
            </div>
            <span className={`text-[10px] tracking-wide ${isActive ? 'font-medium' : 'font-light'}`}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-muji-bg text-muji-text selection:bg-muji-accent selection:text-white">
      <main className="flex-grow pb-20">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;