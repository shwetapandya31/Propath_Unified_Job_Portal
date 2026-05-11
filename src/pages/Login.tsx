import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, Role } from '../context/AuthContext';
import { Briefcase, UserCircle, Building2 } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<Role>('Candidate');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || (!isLogin && !name)) return;
    
    // Simple mock auth
    const displayName = isLogin ? email.split('@')[0] : name;
    login(email, displayName, role);
    
    if (role === 'Employer') {
      navigate('/prof-dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        <div>
          <div className="flex justify-center">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
        </div>

        {/* Role Selector */}
        {!isLogin && (
          <div className="grid grid-cols-2 gap-4 mt-6">
            <button
              type="button"
              onClick={() => setRole('Candidate')}
              className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
                role === 'Candidate'
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-200 text-gray-500'
              }`}
            >
              <UserCircle className="w-8 h-8 mb-2" />
              <span className="font-semibold text-sm">Candidate</span>
            </button>
            <button
              type="button"
              onClick={() => setRole('Employer')}
              className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
                role === 'Employer'
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-200 text-gray-500'
              }`}
            >
              <Building2 className="w-8 h-8 mb-2" />
              <span className="font-semibold text-sm">Employer</span>
            </button>
          </div>
        )}

        {isLogin && (
          <div className="flex justify-center mt-4 space-x-4 text-sm font-medium">
             <label className="flex items-center space-x-2 cursor-pointer text-gray-600 hover:text-blue-600">
                <input 
                  type="radio" 
                  checked={role === 'Candidate'} 
                  onChange={() => setRole('Candidate')} 
                  className="form-radio text-blue-600"
                />
                <span>Login as Candidate</span>
             </label>
             <label className="flex items-center space-x-2 cursor-pointer text-gray-600 hover:text-blue-600">
                <input 
                  type="radio" 
                  checked={role === 'Employer'} 
                  onChange={() => setRole('Employer')} 
                  className="form-radio text-blue-600"
                />
                <span>Login as Employer</span>
             </label>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="sr-only">Full Name / Company Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder={role === 'Candidate' ? 'Full Name' : 'Company Name'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                defaultValue="password123"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}
