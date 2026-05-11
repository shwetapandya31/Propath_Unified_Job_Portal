import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Home, Briefcase, UserCircle, Settings, ClipboardList, Monitor, Globe, LogOut, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const links = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/job-board', label: 'Job Board', icon: Briefcase },
    ...(user?.role === 'Candidate' ? [
      { path: '/dashboard', label: 'My Applications', icon: LayoutDashboard },
    ] : []),
    ...(user?.role === 'Employer' ? [
      { path: '/prof-dashboard', label: 'Employer Dashboard', icon: ClipboardList },
    ] : []),
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 space-x-8">
          <div className="flex-shrink-0 font-bold text-xl text-blue-600">
            ProPath Unified
          </div>
          <div className="flex items-center space-x-4">
            {links.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                <span className="whitespace-nowrap">{label}</span>
              </Link>
            ))}

            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">
                  Hi, {user.name} ({user.role})
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
